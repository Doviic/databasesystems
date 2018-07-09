import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import {AgmCoreModule} from '@agm/core';

import {
    CalendarEvent,
  } from 'angular-calendar';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        FormsModule,
        NgbModalModule.forRoot(),
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAi1MRoDG5I83pAo6DE5pDWxkL-ELk2ViY'
          })
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class DashboardModule {}
export interface MyEvent extends CalendarEvent {
    description: string;
    location: string;
    category: string;
    phone: string;
    type: string;
    email: string;
}

export interface MyCalendarEventTimesChangedEvent {
    event: MyEvent;
    newStart: Date;
    newEnd?: Date;
}
