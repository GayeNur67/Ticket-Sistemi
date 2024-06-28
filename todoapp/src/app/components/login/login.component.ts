import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loggedInUser: string | null = null;

  constructor(private router: Router) {
    // Önceki oturumu kontrol et
    this.loggedInUser = localStorage.getItem('loggedInUser');
  }

  login(): void {
    // Kullanıcı doğrulamasını gerçekleştirin
    // Örneğin, hardcoded bir kullanıcı adı ve şifre kontrolü yapalım
    if (this.username === 'gaye' && this.password === '12' || this.username === 'stajyer' && this.password === '123') {
      window.location.reload();
      // Kullanıcı girişi başarılı ise loggedInUser değişkenini güncelleyin
      this.loggedInUser = this.username;
      // Kullanıcı bilgisini yerel depolamaya kaydedin
      localStorage.setItem('loggedInUser', this.loggedInUser);
      // Yönlendirme işlemi
      this.router.navigate(['/home']);
    } else {
      // Kullanıcı girişi başarısız ise hata mesajını gösterin
      console.log('Kullanıcı adı veya şifre yanlış!');
    }
  }

  logout(): void {
    // Kullanıcı çıkışı işlemi
    this.loggedInUser = null;
    // Kullanıcı bilgisini yerel depolamadan kaldırın
    localStorage.removeItem('loggedInUser');
    // Yönlendirme işlemi
    this.router.navigate(['/']);
  }
}
