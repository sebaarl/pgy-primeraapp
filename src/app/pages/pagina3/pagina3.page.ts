import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/app/interfaces/personal';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  personal : Personal[] = [
    {
      nombre : "Esteban Seguel",
      edad : 21,
      email : "e.seguel@duocuc.cl"
    },
    {
      nombre : "Esteban Seguel",
      edad : 21,
      email : "e.seguel@duocuc.cl"
    },
    {
      nombre : "Esteban Seguel",
      edad : 21,
      email : "e.seguel@duocuc.cl"
    },
    {
      nombre : "Esteban Seguel",
      edad : 21,
      email : "e.seguel@duocuc.cl"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
