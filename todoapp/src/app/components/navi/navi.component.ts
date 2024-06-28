import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUser: string | null = null;
  
  constructor(private dialog: MatDialog, private router: Router) { }

  openLoginForm() {
    this.dialog.open(LoginComponent, { width: '400px' });
  }

  logout(): void {
    // Oturumu sonlandır
    this.isLoggedIn = false;
    this.loggedInUser = null;
    // LocalStorage'daki ilgili verileri sil
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    // LocalStorage'dan oturum durumunu ve kullanıcı bilgisini kontrol et
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      this.isLoggedIn = true;
      this.loggedInUser = user;
    }
  }  
}
