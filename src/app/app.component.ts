import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import * as firebase from 'firebase'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet-angular';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyB0o7H9jgvYm7oQtU6Kr51-9GuhJIuvYZw",
      authDomain: "monagence-1cef0.firebaseapp.com",
      databaseURL: "https://monagence-1cef0.firebaseio.com",
      projectId: "monagence-1cef0",
      storageBucket: "monagence-1cef0.appspot.com",
      messagingSenderId: "409682096242",
      appId: "1:409682096242:web:f55b315e939028170452eb",
      measurementId: "G-1YS8GQYJ87"
    };
    firebase.initializeApp(firebaseConfig);

  }

  

  }
