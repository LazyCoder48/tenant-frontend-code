import { Injectable } from '@angular/core';

@Injectable()
export class DataBusService {

    roomNumber: number;
    dataObject: { [k: string]: any } = {};
    constructor() { }

    setData(key, value) {
        this.dataObject[key] = value;
        console.log(this.dataObject);
    }

    getData(key) {
        return this.dataObject[key];
    }

    deleteData(key) {
        delete this.dataObject[key];
        console.log(this.dataObject);
    }

    selectedRoomNumber(roomNum) {
        this.roomNumber = roomNum;
    }

    getRoomNumber() {
        return this.roomNumber;
    }
}
