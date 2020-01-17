import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { informationNumber } from '../models/information-user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: firebase.User;
  public email: string;
  public numberHours: AngularFireList<informationNumber>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
        console.log(this.user);
        this.email = this.user.email;
        console.log(this.email);
      }
    });
  }

  private setHours(): AngularFireList<informationNumber> {
    console.log('work');
    return this.db.list(
      `users/${this.user.uid}/userInformationDate/`,
      ref => ref.orderByKey().limitToLast(31)
    );
  }
   getHours(): AngularFireList<informationNumber> {
    return this.db.list(
      `users/${this.user.uid}/userInformationDate/`,
      ref => ref.orderByKey()
    );
  }
  sendHours(n: number , start: string) {
    const email = this.email;
    let color = '';
    if (n > 8 || n === 8) {
      color = 'red';
    }
    if (n < 8 || n === 4) {
      color = 'green';
    }
    if (n === 0) {
      color = 'grey';
    }
    this.numberHours = this.setHours();
    this.numberHours.push({
      title: n,
      email,
      start,
      color
    });
  }
}
