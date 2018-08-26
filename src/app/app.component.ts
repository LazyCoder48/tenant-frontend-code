import { Router } from '@angular/router';
import { Component } from '@angular/core';

import icons from 'glyphicons';
import { DataBusService } from './data-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  icon = icons;
  title = 'Rental Application';

  constructor(private router: Router, private _dataService: DataBusService) {
    _dataService.setData('glyhicons', this.icon);
    this.router.navigateByUrl('/check-in');
  }

}
