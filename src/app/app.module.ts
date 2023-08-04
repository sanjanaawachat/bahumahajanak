import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'topmenu',component:TopmenuComponent
  },
    {
      path:'header',component:HeaderComponent
    },
    {
      path:'footer',component:FooterComponent
    },
    {
      path:'about',component:AboutComponent
    },
    {
      path:'contact',component:ContactComponent
    }
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    AboutComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
