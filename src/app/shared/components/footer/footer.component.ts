import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../models/menu-item';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  menuItemProducts: MenuItem[] = [
    { id: 1, label: 'Features', routerLink: '/', fragment: 'top' },
    { id: 2, label: 'Pricing', routerLink: '/', fragment: 'pricing' },
    { id: 3, label: 'FAQ', routerLink: '/', fragment: 'faq' },
    { id: 4, label: 'Blog', routerLink: '/', fragment: 'top' },
  ];

  menuItemCompanies: MenuItem[] = [
    { id: 1, label: 'About', routerLink: '/', fragment: 'top' },
    { id: 2, label: 'Contact', routerLink: '/', fragment: 'top' },
    { id: 3, label: 'Privacy Policy', routerLink: '/', fragment: 'top' },
  ];

  onSubscribe(event: Event) {
    event.preventDefault();
  }
}
