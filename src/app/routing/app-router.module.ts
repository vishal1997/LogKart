import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../body/main-content/home/home.component'
import { LoginComponent} from '../body/login/login.component'

const routes:Routes = [
    {path:"home", component: HomeComponent },
    {path:"login", component: LoginComponent}
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
