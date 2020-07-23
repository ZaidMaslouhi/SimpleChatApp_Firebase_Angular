import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MessageServicesService {


  constructor(private afd: AngularFireDatabase, ) { }

  pushMsg(msg: string,name: string){
    this.afd.list('/messages').push({message: msg, name: name});
  }

  getMsgs(){
    return this.afd.list('/messages').valueChanges();
  }

}
