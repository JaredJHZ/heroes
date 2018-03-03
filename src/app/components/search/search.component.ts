import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
private heroesFound:any[];
private search:string;
  constructor(
    private _heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
      this.activatedRoute.params.subscribe(
        (params)=>{
          this.search = params['text'];
        }
      )
   }

  ngOnInit() {
    this.heroesFound=this._heroesService.buscarHeroes(this.search);
    console.log(this.heroesFound);
  }
  verHeroe(nombre:string){
    console.log(nombre);
    this.router.navigate(['heroe',nombre]);
  }

}
