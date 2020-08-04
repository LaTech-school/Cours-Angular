import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Counter';
  count:number = 0;

  // test= '';

  // fonction less() qui execute une décrémentation
  less() {
    this.count--;
  }

  // fonction more() qui execute une incrémentation
  more() {
    this.count++;
  }

}
