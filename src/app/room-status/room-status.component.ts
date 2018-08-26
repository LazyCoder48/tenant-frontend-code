import { TenantStructure } from './../tenant-structure';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataBusService } from './../data-bus.service';
import { RoomDetailsService } from '../room-details.service';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.css']
})
export class RoomStatusComponent implements OnInit {

  rooms: TenantStructure[];
  roomColumns: any[];
  selectedRoom: TenantStructure;

  constructor( private roomService: RoomDetailsService,
    private dataBusService: DataBusService,
    private router: Router ) { }

  ngOnInit() {
    this.getRoomDetails();

    this.roomColumns = [
      { field: 'roomNum', header: 'RoomNumber' },
      { field: 'tenantName1', header: 'Tenant 1' },
      { field: 'tenantName2', header: 'Tenant 2' },
      { field: 'tenantName3', header: 'Tenant 3' },
      { field: 'tenantName4', header: 'Tenant 4' },
      { field: 'empty', header: 'Room Empty?' }
    ];
  }

  getRoomDetails() {
    this.rooms = this.roomService.getRoomBasicDetails();
    console.log(this.rooms);
    return this.rooms;
  }

  selectedRoomDetails(room) {
    console.log(room);
    this.dataBusService.setData(room.roomNum, room);
    this.dataBusService.selectedRoomNumber(room.roomNum);
    this.router.navigateByUrl('/room-detail/' + room.roomNum);
  }
}
