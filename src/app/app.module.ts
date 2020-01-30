import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const fireconfig = {
  firebase: {
    projectId: "vyabarsample",
    apiKey: "AIzaSyCZLdYoS_qldAXky4tWady8dDyfqmFVEDA",
    authDomain: "https://vyabarsample.firebase.com/",
    databaseURL: "https://vyabarsample.firebaseio.com/",
    storageBucket: "",
    messagingSenderId: 489606959497
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(fireconfig.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
