import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversitySignupRoutingModule } from './university-signup-routing.module';
import { UniversitySignupComponent } from './university-signup.component';

@NgModule({
  imports: [
    CommonModule,
    UniversitySignupRoutingModule
  ],
  declarations: [UniversitySignupComponent]
})
export class UniversitySignupModule { }
