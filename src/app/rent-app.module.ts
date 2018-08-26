import { RoomDetailsComponent } from './room-details/room-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CheckInComponent } from './check-in/check-in.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomStatusComponent } from './room-status/room-status.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'room-status', component: RoomStatusComponent },
  { path: 'check-in', component: CheckInComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'room-detail/:room-id', component: RoomDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})

export class RentAppModule { }
