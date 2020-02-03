import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { InformationNumber } from '../models/information-user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public email: string;
  public numberHours: AngularFireList<InformationNumber>;
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

  public getHours(): Observable<Array<SnapshotAction<InformationNumber>>> {
    this.numberHours = this.db.list(`users/${this.user.uid}/userInformationDate/`, ref => ref.orderByKey());
    return this.numberHours.snapshotChanges();
    }
  public sendHours(customer: { title: number; start: { format: (arg0: string) => string; }; }): void  {
    let color = '';
    if (customer.title > 8 || customer.title === 8) {
      color = 'red';
     }
    if (customer.title  < 8 || customer.title  === 4) {
       color = 'green';
     }
    if ((customer.title  === 0)) {
       color = 'grey';
     }
    this.numberHours.push({
      title: customer.title,
      email: this.email,
      start: customer.start.format('YYYY-MM-DD'),
      color
    });
  }
  public editRecord(customer: { $key: string, title: number, color: string }): void {
    let color = '';
    if (customer.title >= 8 ) {
      color = 'red';
     }
    if (customer.title < 8 && customer.title !== 0) {
       color = 'green';
     }
    if (customer.title === 0) {
       color = 'grey';
     }
    this.numberHours.update(customer.$key, {
      title: customer.title,
      color
    });
  }

  public removeHours($key: string): void {
    this.numberHours.remove($key);
  }
}
