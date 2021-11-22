import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input()  changeText!: string;
  @Output() changeTextChange = new EventEmitter<string>();


  constructor() { 

  }

  ngOnInit() {

    var typed = new Typed('#typed', {
      stringsElement: '#text1',
      typeSpeed: 40,
      showCursor: false,
    });


}

}
