import { Component, OnInit } from '@angular/core';
import { AppItem } from '../../app.item';


@Component({
  selector: 'app-MyTickets',
  templateUrl: './MyTickets.component.html',
  styleUrl: './MyTickets.component.css',
  
})
export class MyTicketsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }
  selectedTickets: AppItem[] = []; // Kullanıcının seçtiği ticketlerin listesi

  // Ticket seçme işlevselliği
  selectTicket(ticket: AppItem): void {
    // Seçilen ticketi listeden kontrol edin
    const index = this.selectedTickets.indexOf(ticket);
    if (index === -1) {
      // Eğer listede yoksa, seçilen ticketi ekleyin
      this.selectedTickets.push(ticket);
    } else {
      // Eğer listede varsa, seçilen ticketi listeden kaldırın
      this.selectedTickets.splice(index, 1);
    }
  }
  
  // Seçilen ticketleri MyTickets sayfasına ekleme işlevselliği
  addToMyTickets(): void {
    console.log("Adding selected tickets to MyTickets...");
    // Seçilen ticketleri localStorage veya başka bir veri kaynağına ekleyebilirsiniz
    this.selectedTickets.forEach(ticket => {
      // Örnek olarak, MyTickets sayfasına eklenen ticketleri localStorage'a ekleyelim
      this.addToLocalStorage(ticket);
    });
  }
  addToMyTicketsFromMessageContainer(item: AppItem): void {
    console.log("Adding ticket from message container to MyTickets...");
    this.addToLocalStorage(item); // Seçilen ticketi MyTickets'e ekle
  }
  
  
  // Ticketleri localStorage'a ekleme işlevselliği
  addToLocalStorage(ticket: AppItem): void {
    let storedItems: AppItem[] = JSON.parse(localStorage.getItem("myTickets")) || [];
    storedItems.push(ticket);
    localStorage.setItem("myTickets", JSON.stringify(storedItems));
  }
}
