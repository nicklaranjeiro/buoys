import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LakeAllComponent } from './lake-all/lake-all.component';
import { LakeErieComponent } from './lake-erie/lake-erie.component';
import { LakeHuronComponent } from './lake-huron/lake-huron.component';
import { LakeMichiganComponent } from './lake-michigan/lake-michigan.component';
import { LakeOntarioComponent } from './lake-ontario/lake-ontario.component';
import { LakeSuperiorComponent } from './lake-superior/lake-superior.component';
import { BuoyDetailsComponent } from './buoy-details/buoy-details.component';

const dashboardRoutes: Routes = [
    {
        path: 'all-lakes',
        component: LakeAllComponent,
    },
    {
        path: 'lake-erie',
        component: LakeErieComponent,
    },
    {
        path: 'lake-huron',
        component: LakeHuronComponent,
    },
    {
        path: 'lake-michigan',
        component: LakeMichiganComponent,
    },
    {
        path: 'lake-ontario',
        component: LakeOntarioComponent,
    },
    {
        path: 'lake-superior',
        component: LakeSuperiorComponent,
    },
    {
        path: ':id',
        component: BuoyDetailsComponent,
    },
    {
        path: '',
        redirectTo: '/all-lakes',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
