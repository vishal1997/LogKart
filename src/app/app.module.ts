import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
import { AppComponent, AppInternalComponents  } from './app.component';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { AppRouterModule, RoutingInternalComponents } from './routing/app-router.module';
import { HomeComponent } from './body/main-content/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
@NgModule({
  declarations: [
    AppComponent,AppInternalComponents, RoutingInternalComponents, HomeComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule, HttpModule, MaterialModule,
    BrowserAnimationsModule, FlexLayoutModule, AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }