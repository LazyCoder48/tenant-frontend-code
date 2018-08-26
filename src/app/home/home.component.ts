import { Component, OnInit } from '@angular/core';
import { DataBusService } from '../data-bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  icons;

  constructor(private _dataBusService: DataBusService) {
    this.icons = _dataBusService.getData('glyhicons');
  }

  ngOnInit() {
  }

}
