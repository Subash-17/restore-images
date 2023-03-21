import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RestorePageComponent } from './restore-page/restore-page.component';


const routes: Routes = [
  {
    path:"",
    component:LandingpageComponent
  },
  {
    path:"landingpage",
    component:LandingpageComponent
  },
  {
    path:'restore',
    component:RestorePageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
