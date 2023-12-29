import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },

  { path: 'about', loadChildren: () => 
  import('../app/about/about.component').then((m) => m.AboutComponent) }, 
 
{ path: 'contact', loadChildren: () =>
import('../app/contact/contact.component').then((m) => m.ContactComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
