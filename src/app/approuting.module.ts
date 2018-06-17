
import { UsersComponent } from './users/users.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { UseralbumsComponent } from './users/useralbums/useralbums.component';
import { FinalphotosComponent } from './users/useralbums/finalphotos/finalphotos.component';



const appRoutes: Routes = [
{path: '', redirectTo: '/users',pathMatch: 'full' },
{path: 'users', component: UsersComponent, children:[
    {path : 'album', component: UseralbumsComponent, children:[
        {path : 'photos', component: FinalphotosComponent}]}
    
]}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ] 
})

export class AppRoutingModule {

}