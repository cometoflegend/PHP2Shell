import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { Sidebar } from './sidebar/sidebar';

@Component({
  imports: [RouterOutlet, Layout, Sidebar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PHP2Shell');
}
