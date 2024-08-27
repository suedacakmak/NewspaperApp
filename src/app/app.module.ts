import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';
import { AboutComponent } from './component/about/about.component';
import { HeaderComponent } from './component/header/header.component';
import { SearchComponent } from './component/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';



const routes: Routes = [
  { path: '', component: HomeComponent }, // Anasayfa için
  { path: 'categories', component: CategoryComponent }, // Kategoriler sayfası için
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    AboutComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    ContactComponent,
    NavbarComponent,
    ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Router modülünü yapılandırıyoruz
   ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
