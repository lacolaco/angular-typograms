import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypogramComponent } from './typogram/typogram.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TypogramComponent],
  template: `
    <app-typogram style="width: 300px" [source]="typogram"></app-typogram>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  typogram = String.raw`
    _   
   / \  
  / △ \ 
 / ___ \ 
/_/   \_\ngular
  `;
}
