import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ServerService } from '../../server.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-useralbums',
  templateUrl: './useralbums.component.html',
  styleUrls: ['./useralbums.component.css']
})
export class UseralbumsComponent implements OnInit , OnDestroy {
  @Input() idalbum: number;
  @Input() userflag: boolean;
 
  flag: boolean= false;
  passid: number;
  albumsreturned: Array<any>;
  
  private subscription : Subscription;
  private subscription2 : Subscription;
  constructor(private serverService: ServerService) {}
  
  ngOnInit() {
      
      this.subscription = this.serverService.flags.subscribe(
      (value : boolean) => {
        this.flag = value
      }
    )


    this.subscription2 = this.serverService.getAlbums().subscribe(
      (dataalbum : any[]) => this.albumsreturned = dataalbum,
      (error) => console.log(error)
    )
  }

  checkforId(id: number){
    if(id == this.idalbum){
      return true;
    }
  }

  getAlbumId(id: number){
      this.passid = id;
      this.flag = true;
      this.serverService.picid.next(this.passid);
      
  }

  changeflagforuser(){
    this.userflag = false;
    this.serverService.userpassflag.next(this.userflag);
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}


