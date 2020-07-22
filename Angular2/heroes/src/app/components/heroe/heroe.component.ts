import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  // Obtener el id de la ruta -> params
  id: number;
  heroe: any = {};
  constructor(
    private service: HeroesService,
    private activated: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = parseInt(this.activated.snapshot.params.id);
    this.heroe = this.service.getHeroe(this.id);
    console.log(this.heroe);
  }
}
