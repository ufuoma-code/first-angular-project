import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../componenets/greeting/greeting.component';


@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('hello, World!');
}
