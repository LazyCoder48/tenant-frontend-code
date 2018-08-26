import { RoomDetailsService } from './../room-details.service';
import { Component, OnInit } from '@angular/core';

import { DataBusService } from './../data-bus.service';
import { TenantStructure } from '../tenant-structure';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  selectedRoomNum: number;
  selectedRoom: TenantStructure;
  detailsToggle: Boolean = false;

  constructor(private dataBusService: DataBusService, private roomDetailsService: RoomDetailsService) { }

  ngOnInit() {
    this.selectedRoom = this.dataBusService.getData(this.dataBusService.getRoomNumber());
    console.log(this.selectedRoom);
  }

  viewAdditionalDetails(roomNum) {
    // this.detailsToggle = !this.detailsToggle;
    this.selectedRoom = this.roomDetailsService.getDetailsOfRoom(roomNum);
    console.log(this.detailsToggle, this.selectedRoom);
  }

}
