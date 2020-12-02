import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-compooent',
  templateUrl: './first-compooent.component.html',
  styleUrls: ['./first-compooent.component.css']
})
export class FirstCompooentComponent implements OnInit {

  title = 'This is my first component';

  constructor() { }

  ngOnInit(): void {
  }

}
