import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritepageComponent } from './favoritepage/favoritepage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';

const routes: Routes = [
  { path: 'buoyportal',
    component: DashboardComponent,
    loadChildren: () => import('./pages/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
  },
  {
    path: 'login',
    component: LoginpageComponent
  },
  {
    path: 'register',
    component: RegisterpageComponent
  },
  {
    path: 'favorite',
    component: FavoritepageComponent
  },
  {
    path: '',
    redirectTo: '/buoyportal/all-lakes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/buoyportal/all-lakes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
