import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';
import { SearchComponent } from './component/search/search.component';
import { AboutComponent } from './component/about/about.component'; // AboutComponent'i ekleyin
import { ContactComponent } from './component/contact/contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent }, // Hakkımda için rota ekleyin
  { path: 'contact', component: ContactComponent },
  {path: 'navbar', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
