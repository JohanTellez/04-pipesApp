import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Johan';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Johan','Alexis', 'Alberta', 'Rocky', 'Homero'];
  clientesMapa = {
    '=0':'no tenemos ningún colombiano esperando un repechaje',
    '=1':'tenemos un colombiano esperando un repechaje',
    'other':'tenemos # colombianos esperando un repechaje'
  }

  cambiarCliente(){
    this.nombre = 'Melisa';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Johan',
    edad: 26,
    direccion: 'Bogotá Colombia'
  }

  //json pipe
  heros=[
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
  ]

  //Async pipe
  miObservable = interval( 2000 );

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Data de la promesa' )
    }, 4000);
  });



  constructor() { }

  ngOnInit(): void {
  }

}
