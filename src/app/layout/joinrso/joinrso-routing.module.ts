import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinrsoComponent } from './joinrso.component';

const routes: Routes = [
    {
        path: '',
        component: JoinrsoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JoinrsoRoutingModule {}
