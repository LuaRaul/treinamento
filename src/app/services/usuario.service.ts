import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUsaurio } from '../interfaces/IUsuario';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient, private router: Router) {

  }
  logar(usuario: IUsaurio) {

    return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
      if (!resposta.sucesso) return;
      localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")))
      localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
      this.router.navigate(['']);
    }));
  }
  private mockUsuarioLogin(usuario: IUsaurio): Observable<any> {
    var retornoMock: any = [];
    if (usuario.email === 'hello@balta.io' && usuario.senha === '123') {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(retornoMock);

    }
    retornoMock.sucesso = true;
    retornoMock.usuario = usuario;
    return retornoMock;
  }
  get obterIdUsuarioLogado(): string {
    var usuario  = "3";

    return usuario?usuario:"" ;
  }
  get obterTokenUsuario(): string {
    return "3"
  }
  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
