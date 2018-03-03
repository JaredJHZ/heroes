import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router
  ) {

   }

  ngOnInit() {
  }
  buscarHeroe(text:String){
    this.router.navigate(['search',text]);
  }
 
 
}
