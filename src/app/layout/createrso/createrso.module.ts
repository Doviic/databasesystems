import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatersoRoutingModule } from './createrso-routing.module';
import { CreatersoComponent } from './createrso.component';

@NgModule({
    imports: [CommonModule, CreatersoRoutingModule],
    declarations: [CreatersoComponent]
})
export class CreatersoModule {}
