import { Component, OnInit } from '@angular/core';

import { DataService } from '@app/services';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
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
