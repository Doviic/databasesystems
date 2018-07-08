import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatersoComponent } from './createrso.component';

const routes: Routes = [
    {
        path: '',
        component: CreatersoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreatersoRoutingModule {}
