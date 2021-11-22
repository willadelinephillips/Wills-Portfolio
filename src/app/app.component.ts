import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Testyboi() {
    var clickText = "clicked!";
    console.log(clickText)
    this.fontSizePx = clickText;
  }

  fontSizePx = 'unclicked';

  title = 'willadelinephillips';
}
