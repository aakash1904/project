import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './approuting.module';
import { UseralbumsComponent } from './users/useralbums/useralbums.component';
import { FinalphotosComponent } from './users/useralbums/finalphotos/finalphotos.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UseralbumsComponent,
    FinalphotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
