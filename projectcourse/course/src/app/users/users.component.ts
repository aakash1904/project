import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../server.service';
import {  Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  userflag:boolean= false;
  users: Array<any>
  idtopass : number;
  subscription: Subscription
  subscription2: Subscription
  constructor(private serverService: ServerService) { }

  ngOnInit(){

    this.subscription=this.serverService.userpassflag.subscribe(
      (value : boolean) => this.userflag = value,
      (error) => console.log(error)
    )

    this.subscription2=this.serverService.getUsers()
      .subscribe(
        (users: any[]) => this.users = users,
        (error) => console.log(error)
      );
      
}

passId(id: number){
  this.idtopass = id;
  this.userflag = true;
}

ngOnDestroy(){
  this.subscription.unsubscribe();
  this.subscription2.unsubscribe();
}

}
