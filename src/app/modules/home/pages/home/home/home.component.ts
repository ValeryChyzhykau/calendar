import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) {}

  async logout() {
    this.service.logout();
    await this.router.navigate(['/login']);
  }

 async ngOnInit() {
   this.service.authUser().subscribe(res => res.uid);
}
}
