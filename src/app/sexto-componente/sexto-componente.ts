import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sexto-componente',
  imports: [FormsModule, CommonModule],
  templateUrl: './sexto-componente.html',
  styleUrl: './sexto-componente.css'
})
export class SextoComponente {
  //inclusão de duas variaveis
  nome:string;
  idade:number=null;
  cidade:string;
}
