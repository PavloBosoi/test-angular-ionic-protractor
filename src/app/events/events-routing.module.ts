import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
    { path: '', component: EventsComponent, data: { title: 'Events' } },
    { path: ':id', component: EventComponent, data: { title: 'Event' } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
    exports: [
      RouterModule
    ]
})
export class EventsRoutingModule { }
