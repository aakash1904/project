import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ServerService } from '../../../server.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-finalphotos',
  templateUrl: './finalphotos.component.html',
  styleUrls: ['./finalphotos.component.css']
})
export class FinalphotosComponent implements OnInit, OnDestroy {
  @Input() idforpics: number;
  @Input() flag: boolean;
  listofpics: any[];
  subscription: Subscription;
  constructor(private serverService: ServerService) { 


    }
    

  ngOnInit() {
    
    
    this.subscription = this.serverService.getPhotos().subscribe(
      (data : any[]) => this.listofpics = data,
      (error) => console.log(error)
    )
    

  }

 

  checkpics(picid: number){
    if(picid == this.idforpics){
      
        return true; 
        
    }
  }


  changeflag(){
    this.flag = false;
    this.serverService.flags.next(this.flag);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
