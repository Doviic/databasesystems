import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEventRoutingModule } from './create-event-routing.module';
import { CreateEventComponent } from './create-event.component';

@NgModule({
    imports: [CommonModule, CreateEventRoutingModule],
    declarations: [CreateEventComponent]
})
export class CreateEventModule {}
