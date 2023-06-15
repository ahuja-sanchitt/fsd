import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  `,
})
export class HeaderComponent {
  @Input() title: string;
  @Input() subtitle: string;

  constructor() {
    this.title = '';
    this.subtitle = '';
  }
}
