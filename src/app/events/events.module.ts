import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
