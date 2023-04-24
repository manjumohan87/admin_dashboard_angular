import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  //path:localhost/4200/dashboard
  {
    path:'dashboard', component:DashboardComponent
  }
  ,
  {
    path:'', redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'employees' , component:EmployeesComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'contact' , component:ContactComponent
  },
  {
    path:'leads' , component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
