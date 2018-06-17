import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ServerService {
  list:any[];
  idtocheck: number;
  albumidtopass = new Subject()
  indextopass = new Subject()
  flags = new Subject()
  userpassflag = new Subject()
  picid = new Subject()
  
   
  constructor(private http: Http) {

    this.picid.subscribe(
      (id: number) => {
        this.idtocheck = id
        console.log(this.idtocheck)
      },
      (error) => console.log(error)
    )

   
    
  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(
      (response : Response) => {
        const dataget = response.json();
        return dataget;
      }
    )
  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums').map(
      (response : Response) => {
        const dataalbum = response.json();
        return dataalbum;
      }
    )
  }

  getPhotos(){
    this.list = [];
    const useId = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get(useId).map(
      (response : Response) => {
        const dataphotos = response.json();
        for(const pic of dataphotos){
          if(pic.albumId == this.idtocheck){
            this.list.push(pic)
          }
        }
        
        return this.list.slice(0,5);
      }
    )
  }
}
