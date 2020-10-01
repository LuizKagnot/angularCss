import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  ObterEstiloBotao(){
    return{
      backgroundColor: 'red',
      border: 'none',
      borderRadius: '4px',
      padding: '8px'
    }
  }
}
