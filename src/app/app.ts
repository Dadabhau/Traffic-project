import { Component, signal } from '@angular/core';
import { Header } from './layouts/header/header';
import { ServerStatus } from './pages/dashboard/server-status/server-status';
import { Traffic } from './pages/dashboard/traffic/traffic';
import { Tickets } from './pages/dashboard/tickets/tickets';

@Component({
  selector: 'app-root',
  imports: [Header, ServerStatus, Traffic, Tickets],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Traffic-project');
}
