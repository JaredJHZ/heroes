import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  t1:String = "Interesting quotes";

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.t1);
  }

}
