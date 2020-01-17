import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserId } from '../models/user.interface';



@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: UserId;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.user = afAuth.authState;
  }
  authUser() {
    return this.user;
  }
  get currentUserId(): string {
    console.log(this.authState);
    return this.authState !== null ? this.authState.user.uid : '';
  }

  async login(email: string, password: string) {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    this.authState = user;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  async signUp(
    email: string,
    password: string,
    userName: string,
    login: string,
    phone: number
  ) {
    try {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.authState = user;
      console.log(this.authState);
      this.setUserData(email, userName, login, phone);
    } catch (error) {
      return console.log(error);
    }
  }

  setUserData(
    email: string,
    userName: string,
    login: string,
    phone: number
  ): void {
    const path = `users/${this.currentUserId}`;
    const data = {
      email,
      userName,
      login,
      phone
    };
    console.log(data);
    console.log(path);
    this.db
      .object(path)
      .update(data)
      .catch(error => console.log(error));
    console.log(this.db);
  }


  checkStatus() {
    return this.afAuth.authState.pipe(
      map(data => {
        if (data !== undefined && data !== null) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
