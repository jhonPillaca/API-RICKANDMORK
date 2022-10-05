import { RouterModule, Routes } from '@angular/router';
import { NopagesfontComponent } from './shared/nopagesfont/nopagesfont.component';

const routes: Routes = [
  {path:'**', component:NopagesfontComponent}
];

export const APP_ROUTES = RouterModule.forRoot(routes); // ,{useHash:true} si es que lo desea #
