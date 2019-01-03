import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-ionic-protractor';

  constructor(private dataService: DataService) {}

  ngOnInit() {

      this.dataService.getEvents().subscribe(data => {
          if (data) {
              console.log(data);
          }
      });
/*      this.dataService.auth().subscribe(data => {
          console.log(data);
      });*/
  }
}
