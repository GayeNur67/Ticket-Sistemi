import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr'; 
import { AdminModule } from './admin/admin.module'; 
import { AuthInterceptor } from './auth/auth.interceptor'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyTicketsComponent } from './components/MyTickets/MyTickets.component';
import { AppRoutingModule } from './app-routing.module';
import { AppFilterPipe } from './pipes/app-filter.pipe';
import { NaviComponent } from './components/navi/navi.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { YenitalepComponent } from './components/ticket/yenitalep/yenitalep.component';
import { TaleptakipComponent } from './components/ticket/taleptakip/taleptakip.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTicketsComponent,
    NaviComponent,
    TicketComponent,
    YenitalepComponent,
    TaleptakipComponent,
    LoginComponent,
    AppFilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AdminModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" })
    // AppComponent ve diğer bileşenler burada imports dizisine eklenmeli
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }


