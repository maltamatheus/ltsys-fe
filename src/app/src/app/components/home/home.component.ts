import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  resultados = new Array<Number>()

  carregaArray(){

    this.resultados.push( 2 ** 3)

    return this.resultados;
  }

  atibuicao(){
    let num = 0;
    while(num <= 10){
      console.log(++num)
    }
  }

  ngOnInit(){
    this.atibuicao()
  }
}
