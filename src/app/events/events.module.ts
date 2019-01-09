import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

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
      EventsRoutingModule,
      AngularDraggableModule
  ]
})
export class EventsModule { }
