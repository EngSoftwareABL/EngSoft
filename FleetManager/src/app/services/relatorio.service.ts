// relatorio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Relatorio {
  id?: string;
  tipo: string;
  dataCriacao?: Date;
  conteudo: string;
}

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private apiUrl = 'http://localhost:8080/relatorios';

  constructor(private http: HttpClient) { }

  getRelatorios() {
    return this.http.get<Relatorio[]>(this.apiUrl);
  }

  criarRelatorio(relatorio: Relatorio) {
    return this.http.post<Relatorio>(this.apiUrl, relatorio);
  }

  obterRelatorioPorId(id: string) {
    return this.http.get<Relatorio>(`${this.apiUrl}/${id}`);
  }

  deletarRelatorio(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
