import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Online Library';
  step=1;
  toStep(step) {
    switch (step) {
      case 1:
        this.step = 1
        break
      case 2:
        this.step = 2
        break
    }
  }
}
