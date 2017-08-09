import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from '../home/home.component';
import { RegComponent } from '../reg/reg.component';
import { AuthComponent } from '../auth/auth.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
 
const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'reg', component: RegComponent },
  { path: 'auth',     component: AuthComponent },
  { path: '**',     component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}