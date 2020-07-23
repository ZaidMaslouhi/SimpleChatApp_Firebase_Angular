import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';
import { MessageServicesService } from './services/message-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  lst;
  name: any;
  msgVal: string;


  constructor(private ath: AngularFireAuth, private msgSrv: MessageServicesService){
    this.lst = msgSrv.getMsgs();
    this.ath.authState.subscribe(ath=>{
      if(ath) this.name = ath;
    });

  }

  login(){
    this.ath.auth.signInWithPopup(new auth.FacebookAuthProvider);
  }

  logOut(){
    this.ath.auth.signOut();
    this.name = null;
  }

  chatSend(message: string){
    this.msgSrv.pushMsg(message,this.name.displayName);
    this.msgVal = '';
  }

}
