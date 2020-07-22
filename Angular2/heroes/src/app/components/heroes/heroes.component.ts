import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: any;
  constructor(private service: HeroesService) {
    console.log('Hola, soy el constructor. Me ejecuto primero');
  }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }
}
