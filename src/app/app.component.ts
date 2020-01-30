import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playAngular';

  constructor(private firestore: FirebaseService) { }

  ngOnInit() {
    this.firestore.getExpenditure().subscribe(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    })
  })
}
}
