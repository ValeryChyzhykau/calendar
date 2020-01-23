import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.interface';



@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: User;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.user = afAuth.authState;
  }
  public auth_user() {
    return this.user;
  }

  public async login(email: string, password: string) {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    this.authState = user;
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

  public async sign_up(
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
      this.set_user_data(email, userName, login, phone);
    } catch (error) {
      return alert(error.message);
    }
  }

  public check_status() {
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
  private set_user_data(
    email: string,
    userName: string,
    login: string,
    phone: number
  ): void {
    const path = `users/${this.current_user_id}`;
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
  private get current_user_id(): string {
    console.log(this.authState);
    return this.authState !== null ? this.authState.user.uid : '';
  }
}
