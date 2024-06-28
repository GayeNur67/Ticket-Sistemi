import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyTicketsComponent } from './components/MyTickets/MyTickets.component';
import { TaleptakipComponent } from './components/ticket/taleptakip/taleptakip.component';
import { YenitalepComponent } from './components/ticket/yenitalep/yenitalep.component';


const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'link', component: MyTicketsComponent },
  { 
    path: 'ticket', 
    
    children: [ 
      { path: 'taleptakip', component: TaleptakipComponent },
      { path: 'yenitalep', component: YenitalepComponent }

    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

