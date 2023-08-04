import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
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
    },
    {
      path:'news',component:NewsComponent
    }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
