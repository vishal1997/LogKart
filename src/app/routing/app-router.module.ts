import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../body/main-content/home/home.component'
import { LoginComponent} from '../body/login/login.component'
import {RegisterComponent} from '../body/register/register.component'
import {SettingComponent} from '../body/setting/setting.component'
import {ContactUsComponent} from '../body/contact-us/contact-us.component'
import { ForgotPasswordComponent } from '../body/forgot-password/forgot-password.component'

const routes:Routes = [
    {path:"home", component: HomeComponent },
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
    {path:"setting",component:SettingComponent},
    {path:"contactus",component:ContactUsComponent},
    {path:"forgotpassword",component:ForgotPasswordComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: false})
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRouterModule {

}

export const RoutingInternalComponents = [
    HomeComponent
] 
