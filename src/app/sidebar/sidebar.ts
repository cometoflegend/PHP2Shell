
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html'
})
export class Sidebar {

  irASeccion(event: Event, id: string): void {
    event.preventDefault();

    const destino = document.getElementById(id);
    const contenedor = document.querySelector('.container-body');

    if (!(destino instanceof HTMLElement) ||
        !(contenedor instanceof HTMLElement)) {
      return;
    }

    const top =
      destino.getBoundingClientRect().top -
      contenedor.getBoundingClientRect().top +
      contenedor.scrollTop;

    contenedor.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
}
