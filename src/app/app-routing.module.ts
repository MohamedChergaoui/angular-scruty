import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { UsersComponent } from './users/components/users/users.component';
import { SaveUserComponent } from './users/components/save-user/save-user.component';
import { UpdateUserComponent } from './users/components/update-user/update-user.component';
import { AnalysesComponent } from './analyses/components/analyses/analyses.component';
import { LoginComponent } from './Login/login/login.component';
import { NavComponent } from './Navbar/nav/nav.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'admin', component:NavComponent, children:[
    { path: 'dashboard', component: DashboardComponent},
  { path: 'users', component:UsersComponent},
  {path: 'users/save', component:SaveUserComponent},
  {path: 'users/id/:id', component:UpdateUserComponent},
  { path: 'analyses', component:AnalysesComponent}
  ]},

  
  

  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
