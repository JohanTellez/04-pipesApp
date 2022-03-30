import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'johan ';
  nombreUpper: string = 'JOHAN';
  nombreCompleto: string = 'jOHaN'

  fecha: Date = new Date(); //fecha de hoy
  
}
