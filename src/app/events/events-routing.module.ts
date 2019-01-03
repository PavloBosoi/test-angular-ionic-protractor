import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event/event.component';

const routes: Routes = [
    { path: 'event', component: EventComponent }
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
