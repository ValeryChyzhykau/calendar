import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

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
  public authUser(): Observable<firebase.User> {
    return this.user;
  }

  public async login(email: string, password: string): Promise<void> {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    this.authState = user;
  }

  public logout(): void {
    this.afAuth.auth.signOut();
  }

  public async signUp(
    email: string,
    password: string,
    userName: string,
    login: string,
    phone: number
  ): Promise<void> {
    try {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.authState = user;
      this.setUserData(email, userName, login, phone);
    } catch (error) {
      return alert(error.message);
    }
  }

  public checkStatus(): Observable<boolean> {
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
  private setUserData(
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
    this.db
      .object(path)
      .update(data)
      .catch(error => alert(error));
  }
  private get currentUserId(): string {
    return this.authState !== null ? this.authState.user.uid : '';
  }
}
