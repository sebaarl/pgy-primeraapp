import { Component } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';
import { Personal } from './interfaces/personal'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  opciones : Opmenu[] = [
    {
      link:"home",
      icon: "home",
      text: "Home",
    },
    {
      link:"pagina2",
      icon: "list",
      text: "Lista",
    },
    {
      link:"pagina3",
      icon: "person",
      text: "Personal",
    },
    {
      link:"pagina2",
      icon: "list",
      text: "Lista",
    },
    {
      link:"pagina3",
      icon: "person",
      text: "Personal",
    },
  ]

  constructor() {}
}
