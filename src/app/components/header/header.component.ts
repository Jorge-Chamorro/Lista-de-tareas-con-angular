import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Lista de Tareas';


  constructor() { }

  ngOnInit(): void {
  }

  botonPresionado(){
    console.log("padre recibio el click");
  }

}
