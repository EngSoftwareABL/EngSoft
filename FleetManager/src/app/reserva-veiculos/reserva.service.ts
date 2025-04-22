import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reserva {
  idUsuario: string;
  idVeiculo: string;
  dataInicio: Date;
  dataFim: Date;
  tipoUso: string; //+ implementando tipo de uso, como metodo post
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private readonly apiUrl = 'http://localhost:8080/reserva';

  constructor(private http: HttpClient) {}

  criarReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.apiUrl, reserva);
  }
}