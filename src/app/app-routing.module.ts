import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeDetailsComponent } from './pages/home-details/home-details.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"home/:id",
    component: HomeDetailsComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
