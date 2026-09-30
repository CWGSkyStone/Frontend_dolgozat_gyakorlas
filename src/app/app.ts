/*
File: app.ts
Author: Szabó József
Copyright: 2026, Szabó József
Group: Szoft II/N
Date: 2026-09-30
Github: https://github.com/CWGSkyStone/
Licenc: GNU GPL
*/
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gula');
}
