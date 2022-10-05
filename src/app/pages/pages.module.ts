import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RickandmorkComponent } from './rickandmork/rickandmork.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTER } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    RickandmorkComponent,
    PagesComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTER,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
