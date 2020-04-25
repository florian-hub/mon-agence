import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Ma super Agence' ; 
  isDisabled = true;
  isLoggedIn =false;


  onClick(){
    this.isDisabled = false;


  }

  constructor(
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession)=>{
        console.log('userSession', userSession);
        if(userSession){
          this.isLoggedIn =true;
        }else{
          this.isLoggedIn =false;
        }
      }
    )
  }
  
  onSignOut(){
    this.authenticationService.signOutUser();
    
  }

}
