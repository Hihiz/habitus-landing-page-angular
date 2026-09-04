import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    this.viewportScroller.setOffset([0, 100]);
  }
}
