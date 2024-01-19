import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from "./convert.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, ConvertPipe]
})
export class AppComponent {
  title = 'pipe';

  mileInput: string = '';

  onChangeMile(mile: string) {
    this.mileInput = mile;
  }
}
