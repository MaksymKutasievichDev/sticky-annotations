import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PagesComponent } from "./components/pages/pages.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'document/:id',
    component: PagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
