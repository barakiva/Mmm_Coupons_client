import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spine',
  templateUrl: './spine.component.html',
  styleUrls: ['./spine.component.scss']
})
export class SpineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this);
  }

}
