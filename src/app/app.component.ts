import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypogramComponent } from './typogram/typogram.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TypogramComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  typogram = `
  +-----+            +-----+
  |  A  |            |  B  |
  +--+--+            +--+--+
     | foo              |
     |----------------->|
     | hello            |
     |----------------->|--+
     |           world  |  | prompts the user
     |<-----------------|--+
     |                  |
   --+--              --+--
  `;
}
