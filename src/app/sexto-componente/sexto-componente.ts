import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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
    numero: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(500)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sexo: new FormControl('M', [Validators.required])
  });

  //Visibilidade dos botões
  btnCadastrar: boolean = false;

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
      cidade:this.vetor[indice].cidade,
      sexo: this.vetor[indice].sexo,
      numero: this.vetor[indice].numero
    });

    this.btnCadastrar = false;
  }

  //Função de alteração
  alterar(){
    //alterar o vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa

    //Limpar os inputs
    this.formulario.reset();

    //Visibilidade dos botoes
    this.btnCadastrar= true;
  }

  remover(){
    //removendo pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //limpeza dos inputs
    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastrar = true;
  }

  //botao de cancelamento

  cancelar(){
    //limpeza dos inputs

    this.formulario.reset();

    //visibilidade dos botões
    this.btnCadastrar = true;
  }


}
