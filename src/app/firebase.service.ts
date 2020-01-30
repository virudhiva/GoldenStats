import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getExpenditure() {
    let exp = this.firestore.collection('goldenExpenditureList').get();
    return exp;
  }

  getInvestment() {
    let invest = this.firestore.collection('goldenInvestmentList').get();
    return invest;
  }

  getSHistory() {
    let hsavings = this.firestore.collection('goldenHistorySavings').get();
    return hsavings;
  }

}
