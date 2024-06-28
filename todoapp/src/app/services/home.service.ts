import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  openHomePage() {
    // Burada home sayfasını açacak kodu yazabilirsiniz.
    console.log('Home page açıldı');
  }
}

