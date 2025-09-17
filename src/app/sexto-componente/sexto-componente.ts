import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-sexto-componente',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
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

  //Visibilidade dos botões
  btnCadastrar: boolean = true;

  //Cadastrar Pessoa
  vetor:Pessoa[];

  //Função Cadastrar
  Cadastrar(){
    //Inclusão da função no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza dos inputs
    this.formulario.reset();

    //Visualização
    console.table(this.vetor);}

  //Armazenar indice da Pessoa selecionada
  indice: number = -1;
  
  Selecionar(indice:number){
    //atribuir o indice da pessoa
    this.indice = indice;

    //Atribuir os dados da pessoa no formulario
    this.formulario.setValue({
      nome:this.vetor[indice].nome,
      idade:this.vetor[indice].idade,
      cidade:this.vetor[indice].cidade
    });

    this.btnCadastrar = false;
  }
}