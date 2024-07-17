import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  resultados = new Array<Number>()

  num: number = 10

  carregaArray(){

    this.resultados.push( 2 ** 3)

    return this.resultados;
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

  ngOnInit(){

    let num: any = prompt('Digite um número: ')

    for (let i=0;i<=10;i++){
      this.num = i * num;
      console.log(this.num)
    }
  }
}
