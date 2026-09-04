import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  menuItems: MenuItem[] = [
    { id: 1, label: 'Home', routerLink: '/', fragment: 'top' },
    { id: 2, label: 'Features', routerLink: '/', fragment: 'top' },
    { id: 3, label: 'Hot it works', routerLink: '/', fragment: 'top' },
    { id: 4, label: 'Blog', routerLink: '/', fragment: 'top' },
    { id: 5, label: 'Resources', routerLink: '/', fragment: 'top' },
    { id: 6, label: 'About us', routerLink: '/', fragment: 'top' },
  ];
}
