import { Component, OnInit, Input } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 40,
      showCursor: false,
    });
    
}

}
