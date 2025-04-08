import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Veiculo {
  id_veiculo: string;
  modelo: string;
  placa: string;
  manut: string;
  km: number;
  status: string;
  disponibilidade: string[];
}

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  private baseUrl = 'http://localhost:8080/vehicle';

  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseUrl);
  }

  reservarVeiculos(payload: any): Observable<any> {
    return this.http.post('http://localhost:8080/reservas', payload);
  }
}
