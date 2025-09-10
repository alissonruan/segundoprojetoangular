import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-sexto-componente',
  imports: [FormsModule, CommonModule, FormGroup, ReactiveFormsModule, FormControl],
  templateUrl: './sexto-componente.html',
  styleUrl: './sexto-componente.css'
})

export class SextoComponente {
  //Objeto de formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
}