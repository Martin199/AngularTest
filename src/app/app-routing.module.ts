import { ReusableStateComponent } from './shared/reusable/reusable-state/reusable-state.component';
import { ReusableToolbarComponent } from './shared/reusable/toolbar/reusable-toolbar.component';
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
  },{
    path:"prueba",
    component: ReusableStateComponent
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
