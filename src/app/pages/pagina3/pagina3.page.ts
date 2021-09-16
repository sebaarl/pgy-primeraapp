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
      nombre : "Arturo Vidal",
      edad : 34,
      email : "vidal@borracho.cl"
    },
    {
      nombre : "Arturo Vidal",
      edad : 34,
      email : "vidal@borracho.cl"
    },
    {
      nombre : "Arturo Vidal",
      edad : 34,
      email : "vidal@borracho.cl"
    },
    {
      nombre : "Arturo Vidal",
      edad : 34,
      email : "vidal@borracho.cl"
    },
    {
      nombre : "Arturo Vidal",
      edad : 34,
      email : "vidal@borracho.cl"
    },
    {
      nombre : "Arturo Vidal",
      edad : 34,
      email : "vidal@borracho.cl"
    },
    {
      nombre : "Arturo Vidal",
      edad : 34,
      email : "vidal@borracho.cl"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
