import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Heroe,HeroesService} from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
heroe:any = {};
LOGO_LINK:String;
  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService
  ) { 
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
      this.heroe = this._heroeService.getHeroe(params['id']);
      }else{
        this.heroe = this._heroeService.getFoundHeroe(params['nombre']);
      }
      if(this.heroe.casa!='DC'){
        this.LOGO_LINK = 'assets/mlogo.jpg';
      }else this.LOGO_LINK = 'assets/dlogo.jpg';
    });
  }

  ngOnInit() {
  }

}
