import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinrsoRoutingModule } from './joinrso-routing.module';
import { JoinrsoComponent } from './joinrso.component';

@NgModule({
    imports: [CommonModule, JoinrsoRoutingModule],
    declarations: [JoinrsoComponent]
})
export class JoinrsoModule {}
