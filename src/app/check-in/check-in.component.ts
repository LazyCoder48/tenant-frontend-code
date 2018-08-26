import { Component, OnInit } from '@angular/core';
import { RoomDetailsService } from './../room-details.service';
import { TenantStructure } from './../tenant-structure';
import { SingleTenant } from './../single-tenant';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  allRoomsList = [201, 202, 203, 204, 205, 301, 302, 303];
  roomNum: number;
  totalTenants: number;

  newTenantFlag: Boolean = false;
  emptyRoomsList: number[];

  addTenantFlag: Boolean = false;
  partiallyFilledRoomsList: number[];

  selectedRoomDetails: TenantStructure;

  emptyTenant: SingleTenant = {
    name: null,
    number: null
  };

  newTenants: TenantStructure = {
    roomNum: 0,
    tenant1: {
      name: null,
      number: null
    },
    tenant2: {
      name: null,
      number: null
    },
    tenant3: {
      name: null,
      number: null
    },
    tenant4: {
      name: null,
      number: null
    },
    advanceAmount: 3200,
    rentAmount: 3200,
    electricityBill: 0,
    miscAmount: 0,
    empty: 'Yes',
    totalTenants: 0,
    tenantAddition: false
  };

  constructor(private _roomDetailsService: RoomDetailsService) { }
  newTenant = false;
  addTenant = false;
  availableRoomsList: number[];

  ngOnInit() {
    this.getDetailsNewTenant();
    console.log('Before: ', this.newTenants);
  }

  /* default method to get empty rooms list */
  getDetailsNewTenant() {
    this.newTenant = true;
    this.addTenant = false;
    this.emptyRoomsList = this._roomDetailsService.getEmptyRooms();
    console.log(this.emptyRoomsList);
  }


  /* select room number */
  roomNoSelected(roomNum, tenantFlag) {
    this.roomNum = roomNum;
    this.newTenants.roomNum = this.roomNum;
    console.log(this.roomNum);
    if (tenantFlag === 'AddTenant') {
      this.getSelectedRoomDetails(roomNum);
    }
  }

  /* new tenant submit method */
  newTenantSubmit() {
    console.log(this.totalTenants, this.emptyTenant);

    if (this.totalTenants === 1) {
      console.log(this.totalTenants);
      this.newTenants.tenant2 = Object.assign({ name: null, number: null }, this.emptyTenant);
      this.newTenants.tenant3 = Object.assign({ name: null, number: null }, this.emptyTenant);
      this.newTenants.tenant4 = Object.assign({ name: null, number: null }, this.emptyTenant);
      this.newTenants.tenant2 = this.emptyTenant;
      this.newTenants.tenant3 = this.emptyTenant;
      this.newTenants.tenant4 = this.emptyTenant;
      this.newTenants.rentAmount = 3200;
    }
    if (this.totalTenants === 2) {
      this.newTenants.tenant3 = Object.assign({ name: null, number: null }, this.emptyTenant);
      this.newTenants.tenant4 = Object.assign({ name: null, number: null }, this.emptyTenant);
      this.newTenants.tenant3 = this.emptyTenant;
      this.newTenants.tenant4 = this.emptyTenant;
      this.newTenants.rentAmount = 3500;
    }
    if (this.totalTenants === 3) {
      this.newTenants.tenant4 = Object.assign({ name: null, number: null }, this.emptyTenant);
      this.newTenants.tenant4 = this.emptyTenant;
      this.newTenants.rentAmount = 3800;
    } else {
      this.newTenants.rentAmount = 4000;
    }

    console.log('After: ', this.newTenants);
  }

  /* default method to get partially filled rooms list */
  getDetailsAddTenant() {
    this.addTenant = true; this.newTenant = false;
    this.roomNum = 0;
    this.newTenants.roomNum = 0;
    console.log(this.roomNum, this.newTenants);
    this.partiallyFilledRoomsList = this._roomDetailsService.getPartiallyAvailableRooms();
    console.log(this.partiallyFilledRoomsList);
  }

  getSelectedRoomDetails(roomNum) {
    this.selectedRoomDetails = this._roomDetailsService.getDetailsOfRoom(roomNum);
    this.newTenants = this.selectedRoomDetails;
    console.log(this.selectedRoomDetails);
  }

}
