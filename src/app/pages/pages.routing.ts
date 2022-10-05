import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { RickandmorkComponent } from "./rickandmork/rickandmork.component";



const pagesrouter:Routes=[
    {
      path:'',
      component:PagesComponent,
      children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'rickandmork',component:RickandmorkComponent,},
       
        {path:'',pathMatch:'full',redirectTo:'/dashboard'}
      ]
    }
  ]
  
  export const PAGES_ROUTER = RouterModule.forChild(pagesrouter);