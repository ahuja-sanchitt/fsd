import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="Title" [subtitle]="Subtitle"></app-header>
  `,
})
export class AppComponent {
  Title: string = 'Hello Angular';
  Subtitle: string = 'Welcome to my Angular App!';
}
