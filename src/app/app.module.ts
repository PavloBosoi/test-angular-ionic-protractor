import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

/*ROUTE MODULE*/
import { AppRoutingModule } from './app-routing.module';

/*COMPONENTS*/
import { HeaderComponent } from './header/header.component';

/*REDUCERS*/
import { eventsReducer } from '@app/redux/events.reducer';

/*MODULES*/


@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      ClarityModule,
      BrowserAnimationsModule,
      StoreModule.forRoot({eventsPage: eventsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
