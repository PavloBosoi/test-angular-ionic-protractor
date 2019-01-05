import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventCardComponent } from './event-card/event-card.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [
    EventComponent,
      EventCardComponent,
      EventsComponent
  ],
  imports: [
    CommonModule,
      EventsRoutingModule
  ]
})
export class EventsModule { }
