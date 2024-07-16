import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  title = "Olá Mundo"

  frase = 'Fala galera, blz?'

  i1 = 10
  i2 = 'asd234356'

  descobreTipo(tipo: any){
    console.log(typeof tipo)
    console.log(tipo)

    console.log('O valor é: ',parseInt(this.i2))
  }
  saudacao(){
    console.log(this.frase)
    console.log('O tipo de i2 é: ',typeof this.i2)
    console.log(this.i1 + this.i2)
    // console.log(this.i1 * this.i2)
    // console.log(this.i1 - this.i2)
    // console.log(this.i1 / this.i2)

  }

  ngOnInit(): void {
    this.saudacao()
    let par = ['matheus','malta','de','aguiar']
    this.descobreTipo(par)

    // let numero = 0;

    // while(numero <= 10 ){
    //   numero = numero + 0.1;
    //   console.log(numero)
    // }
  }

}
