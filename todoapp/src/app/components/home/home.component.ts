import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
    
  }
ngOnInit(): void {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      console.log('Sayfa değişti');
      // Sayfa değiştiğinde tekrar menü öğeleri yükleniyor
  
    }
  });
}
navigateToHome() {
  this.router.navigate(['/home']);
}

links = [
  { title: 'Google', url: 'https://www.google.com', icon: 'fa-google' },
  { title: 'Linkedin', url: 'https://www.linkedin.com/in/gaye-nur-yankın-3a27142b4/', icon: 'fa-linkedin' },
  { title: 'Kariyer.Net', url: 'https://www.kariyer.net/hesabim', icon: 'fa-briefcase' },
  { title: 'Instagram', url: 'https://www.instagram.com/teklascareer/', icon: 'fa-instagram'}];
}
