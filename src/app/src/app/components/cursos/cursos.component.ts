import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface pessoa{
  nomeCompleto: string,
  idade: number,
  estadoCivil: string
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
  standalone: true,
  imports: [MatTableModule, CommonModule]
})
export class CursosComponent implements OnInit{

  idx!: number

  TAB_MATERIAL: Array<pessoa> = new Array(
    {nomeCompleto: 'Heitor Caliman Malta', idade:  5, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade:  6, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade:  7, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade:  8, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade:  9, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade: 10, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade: 11, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade: 12, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade: 13, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade: 14, estadoCivil: 'solteiro'},
    {nomeCompleto: 'Heitor Caliman Malta', idade: 15, estadoCivil: 'solteiro'},
  )



  infoCol1 = new Array()
  infoCol2 = new Array()
  infoCol3 = new Array()

  dataSource = this.TAB_MATERIAL
  displayedColumns: string[] = ['nomeCompleto','idade','estadoCivil']

  ngOnInit(): void {

    this.preencheCol1()

    this.preencheCol2()

    this.preencheCol3()

    }

    preencheCol1(){

      this.idx = 1

      while (this.idx <= 3){
        let info = 'Info Col1 - ' + this.idx
        this.infoCol1.push(info)
        this.idx++
      }

      console.log(this.infoCol1)
    }

    preencheCol2(){

      this.idx = 1

      while (this.idx <= 3){
        let info = 'Info Col2 - ' + this.idx
        this.infoCol2.push(info)
        this.idx++
      }
    }

    preencheCol3() {

      this.idx = 1

      while (this.idx <= 3){
        let info = 'Info Col3 - ' + this.idx
        this.infoCol3.push(info)
        this.idx++
      }
    }

}
