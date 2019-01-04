import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    events: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getEvents()
      .subscribe(data => {
          if (data) {
              this.events = data;
              console.log(this.events);
          }
      });
  }

}
