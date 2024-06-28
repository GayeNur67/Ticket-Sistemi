import { Component, OnInit } from '@angular/core';
import { AppFilterPipe } from './pipes/app-filter.pipe';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TICKET';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Component initialization logic
  }
}
