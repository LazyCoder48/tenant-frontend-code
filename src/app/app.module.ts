import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoomStatusComponent } from './room-status/room-status.component';
import { HomeComponent } from './home/home.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

import { RoomDetailsService } from './room-details.service';
import { DataBusService } from './data-bus.service';

import { RentAppModule } from './rent-app.module';

import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomStatusComponent,
    HomeComponent,
    CheckInComponent,
    CheckOutComponent,
    RoomDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RentAppModule,
    TableModule,
    CarouselModule,
    TabViewModule,
    CardModule
  ],
  providers: [
    RoomDetailsService,
    DataBusService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
