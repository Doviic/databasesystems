import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventComponent } from './create-event.component';

import {
    AlertComponent,
    ButtonsComponent,
    ModalComponent,
    CollapseComponent,
    DatePickerComponent,
    DropdownComponent,
    PaginationComponent,
    PopOverComponent,
    ProgressbarComponent,
    TabsComponent,
    RatingComponent,
    TooltipComponent,
    TimepickerComponent
} from '../bs-component/components';
import { PageHeaderModule } from '../../shared';


@NgModule({
    imports: [CommonModule, CreateEventRoutingModule,FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule],
    declarations: [CreateEventComponent, TimepickerComponent, DatePickerComponent]
})
export class CreateEventModule {}
