import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversitySignupComponent } from './university-signup.component';

const routes: Routes = [
    {
        path: '', component: UniversitySignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UniversitySignupRoutingModule {
}
