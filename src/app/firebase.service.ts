import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getExpenditure() {
    // return this.firestore.collection('goldenExpenditureList').snapshotChanges();
    let citiesRef = this.firestore.collection('goldenExpenditureList').get();
    return citiesRef;
  }

}
