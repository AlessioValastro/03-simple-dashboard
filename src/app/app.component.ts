import { Component } from '@angular/core';
import { HaederComponent } from "./haeder/haeder.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HaederComponent, TicketsComponent, TrafficComponent, ServerStatusComponent],
})
export class AppComponent {
  
}
