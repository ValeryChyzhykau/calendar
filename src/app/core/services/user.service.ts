import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { informationNumber } from '../models/information-user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public email: string;
  public numberHours: AngularFireList<informationNumber>;
  private user: firebase.User;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
        this.email = this.user.email;
      }
    });
  }

  public get_hours(): AngularFireList<informationNumber> {
    return this.db.list(`users/${this.user.uid}/userInformationDate/`, ref =>
      ref.orderByKey()
    );
  }
  public send_hours(userHours: number, start: string) {
    const email = this.email;
    let color = '';
    if (userHours > 8 || userHours === 8) {
      color = 'red';
    }
    if (userHours < 8 || userHours === 4) {
      color = 'green';
    }
    if (userHours === 0) {
      color = 'grey';
    }
    this.numberHours = this.set_hours();
    this.numberHours.push({
      title: userHours,
      email,
      start,
      color
    });
  }
  private set_hours(): AngularFireList<informationNumber> {
    return this.db.list(`users/${this.user.uid}/userInformationDate/`, ref =>
      ref.orderByKey().limitToLast(31)
    );
  }
}
