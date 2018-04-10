import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {HeaderComponent} from './header/header.component';
import {Routes,RouterModule} from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes:Routes=[
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'services',component:ServicesComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'contact',component:ContactComponent},
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent}
];
@NgModule({
  imports: [     
      BrowserModule,
	FormsModule,
	HttpModule, BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)
  ],
  declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        ContactComponent,
        PortfolioComponent,HeaderComponent,
         SignupComponent, SigninComponent
  ],
  providers: [
      
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 