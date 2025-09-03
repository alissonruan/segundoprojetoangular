import { Component, signal } from '@angular/core';
import { SextoComponente } from "./sexto-componente/sexto-componente";

@Component({
  selector: 'app-root',
  imports: [SextoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oitavo-componente');
}
