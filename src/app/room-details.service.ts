import { Injectable } from '@angular/core';

import { mockTenantData } from './mockTenantData';
import { TenantStructure } from './tenant-structure';

@Injectable()
export class RoomDetailsService {

    roomsAvailable: number[] = [];

    constructor() { }

    getMockTenantData() {
        console.log(mockTenantData);
        return mockTenantData;
    }

    getRoomBasicDetails() {
        const rooms: TenantStructure[] = [];
        let room: TenantStructure = new TenantStructure();
        this.getMockTenantData().forEach(r => {
            room.roomNum = r.roomNum;
            if (r.roomNum && r.tenant1) {
                room.tenant1 = r.tenant1;
                room.tenant2 = r.tenant2;
                room.tenant3 = r.tenant3;
                room.tenant4 = r.tenant4;
                room.empty = 'No';
            } else {
                room.tenant1 = null;
                room.tenant2 = null;
                room.tenant3 = null;
                room.tenant4 = null;
                room.empty = 'Yes';
            }
            rooms.push(room);
            room = new TenantStructure();
        });
        console.log('ROOMS', rooms);
        return rooms;
    }

    getDetailsOfRoom(roomNumber) {
        return this.getMockTenantData().find(room => room.roomNum = roomNumber);
    }

    getEmptyRooms() {
        this.roomsAvailable = [];
        this.getMockTenantData().forEach(r => {
            if (r.empty === 'Yes') {
                this.roomsAvailable.push(r.roomNum);
            }
        });
        return this.roomsAvailable;
    }

    getPartiallyAvailableRooms() {
        this.roomsAvailable = [];
        this.getMockTenantData().forEach(r => {
            if (1 < r.totalTenants && r.totalTenants < 4 && r.tenantAddition === true) {
                this.roomsAvailable.push(r.roomNum);
            }
        });
        return this.roomsAvailable;
    }

}
