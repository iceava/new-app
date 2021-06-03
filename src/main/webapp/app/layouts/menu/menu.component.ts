import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'jhi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menu = false;
  constructor(private http: HttpClient) {}

  toggleMenu(): void {
    this.menu = !this.menu;
  }
}
