import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../componenets/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal('hello, World!');

 keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
 }

