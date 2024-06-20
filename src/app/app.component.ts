import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ltsys-fe';

  saudacao(){
    console.log('Seja Bem Vindo');
  }
  ngOnInit(): void {
    this.saudacao();
  }
}
