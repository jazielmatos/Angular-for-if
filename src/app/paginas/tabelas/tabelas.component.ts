import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  public produtos:any[] = []
  
  constructor() { 
   

  
  }

  ngOnInit(): void {
    this.produtos.push(
      {
        id: 1,
        nome: 'Morango',
        descricao: 'Um Morango',
        preco: 5.5,
        cpf: '51877328898'
      },
      {
        id: 2,
        nome: 'Pessego',
        descricao: 'Um Pessego',
        preco: 5.5,
        cpf: '51877328898'
      }
    )

    
  }

}
