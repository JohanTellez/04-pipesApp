import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nombre: string = 'johan ALEXIS tElLeZ CHItivA';
  valor: number = 1000;
  obj = {

  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

  constructor(
    private primeConfig: PrimeNGConfig,
  ) {}

  ngOnInit() {
    this.primeConfig.ripple = true;
  }

}
