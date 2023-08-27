import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    component:HeaderComponent,
    path:"header"
  },
  {
    component:HomepageComponent,
    path:"home"
  },
  {
    component:AboutusComponent,
    path:"about"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
