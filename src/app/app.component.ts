import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'elabtrabescolar';
  solicitacao={name:'Raul Antunes',idade:33}
  contador = 0;
  constructor() {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  contar(){
    this.contador =  this.contador + 1;
    this.solicitacao.idade = this.contador
  }
}
