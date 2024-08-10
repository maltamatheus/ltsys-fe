import { Component, OnInit } from '@angular/core';
import { tipoCompensacao } from './tipos.enums';
import { PropertyRead } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  frase: string = ''

  pessoa = {
    nome: "Matheus",
    idade: 44,
    sexo: "Masculino"
  }

  pessoas = [
    this.pessoa,
    {nome:"Marcela",idade:44,sexo:"Feminino"},
    {nome:"Heitor",idade:5,sexo:"Masculino"},
  ]

  resultados = new Array<Number>()

  num: number = 10

  carregaArray(){

    this.resultados.push( 2 ** 3)

    return this.resultados;
  }

  ngOnInit(){
    this.iterarArrays()
  }

  iterarArrays(){
    for (let obj in this.pessoas){
      // console.log(this.pessoas[obj])
      for (let prop in this.pessoas[obj] ){
        console.log(`${prop}": "${(this.pessoas[obj] as any)[prop]}`)
      }
    }
  }

  listaPropriedadesObj(){
    for (let prop in this.pessoa){
      console.log(`
        {"${prop}": "${(this.pessoa as any)[prop]}" é foda,}`)
    }
  }

  imprimirEnum(){
    let tipo = tipoCompensacao.BOLETO_QUITACAO

    console.log(tipo)
  }

  repeticao(){
    for (let i=0;i<=10;i++){
      if(i%3 == 0 && i > 3){
        continue;
      }
      console.log(`Valor de i é ${i}`)
    }
  }

  repeticao1(){
    for (let i=0;i<=10;i++){
      console.log(`O resto da divisao de ${i} por 3 é ${i%3}`)
    }

    for (let i=0;i<=10;i++){
      console.log('valor de i ',i,i%3)
      if((i%3)>0 && i>3){
        break
      }

    console.log(`Valor de i no else é ${i}`)

    }
  }

  falsyTruthy(){

    let a: any
    let b: any

    if(a * b){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  atibuicao(){
    let num = 0;
    while(num <= 10){
      if (num!=0){
        console.log(num++)
      } else {
        num++
      }
    }
  }

  ternario(){
    let valor1 = 30
    let valor2 = 20
    let valor3 = 10
    let valor4 = 5
    // return valor4 < (valor3 < (valor1 < valor2 ? valor1 : valor2) ? valor3 : (valor1 < valor2 ? valor1 : valor2)) ?
    // valor4 : (valor3 < (valor1 < valor2 ? valor1 : valor2) ? valor3 : (valor1 < valor2 ? valor1 : valor2))
    let dif1 = valor1 < valor2 ? valor1 : valor2
    let dif2 = valor3 < dif1 ? valor3 : dif1
    return valor4 < dif2 ? valor4 : dif2

  }

}
