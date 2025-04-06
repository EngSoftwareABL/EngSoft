import { Component } from '@angular/core';

interface Veiculo {
  modelo: string;
  placa: string;
  manutencao: string;
  quilometragem: number;
  status: string;
  disponibilidade: string[]; // Datas em que está disponível
  reservaInicio?: string;
  reservaFim?: string;
}

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.css']
})
export class ListaVeiculosComponent {
  dataAtual = new Date();
  dataFormatada = this.formatarData(this.dataAtual);
  dataInicioReserva: string = '';
  dataFimReserva: string = '';
  mostrarModal = false;
  dataHoraReserva: string = '';
  indicesSelecionadosParaReservar: number[] = [];

  veiculos: Veiculo[] = [
    { modelo: 'Ford Ka', placa: 'ABC-1234', manutencao: '2025-04-02', quilometragem: 45000, status: 'Reservado', disponibilidade: ['2025-04-08', '2025-04-10'] },
    { modelo: 'Ford Fiesta', placa: 'DEF-5678', manutencao: '2025-03-12', quilometragem: 38000, status: 'Liberado', disponibilidade: ['2025-04-06', '2025-04-07'] },
    { modelo: 'Ford Ranger', placa: 'GHI-9012', manutencao: '2025-02-15', quilometragem: 62000, status: 'Liberado', disponibilidade: ['2025-04-06'] },
    { modelo: 'Ford EcoSport', placa: 'JKL-3456', manutencao: '2025-03-18', quilometragem: 52000, status: 'Liberado', disponibilidade: ['2025-04-06', '2025-04-09'] },
    { modelo: 'Ford Focus', placa: 'MNO-6789', manutencao: '2025-01-20', quilometragem: 41000, status: 'Liberado', disponibilidade: ['2025-04-08'] },
    { modelo: 'Ford Maverick', placa: 'PQR-1111', manutencao: '2025-04-01', quilometragem: 30000, status: 'Liberado', disponibilidade: ['2025-04-06', '2025-04-10'] },
    { modelo: 'Ford Mustang', placa: 'STU-2222', manutencao: '2025-03-05', quilometragem: 15000, status: 'Liberado', disponibilidade: ['2025-04-07'] },
    { modelo: 'Ford Edge', placa: 'VWX-3333', manutencao: '2025-03-28', quilometragem: 55000, status: 'Reservado', disponibilidade: ['2025-04-06', '2025-04-08'] },
    { modelo: 'Ford Bronco', placa: 'YZA-4444', manutencao: '2025-04-04', quilometragem: 27000, status: 'Liberado', disponibilidade: ['2025-04-06'] },
    { modelo: 'Ford Territory', placa: 'BCD-5555', manutencao: '2025-03-15', quilometragem: 60000, status: 'Liberado', disponibilidade: ['2025-04-09'] },
  ];

  veiculoSelecionado: boolean[] = Array(10).fill(false);

  get veiculosDoDia(): Veiculo[] {
    return this.veiculos.filter((v, i) =>
      v.disponibilidade.includes(this.dataFormatada)
    );
  }

  alterarData(dias: number) {
    this.dataAtual.setDate(this.dataAtual.getDate() + dias);
    this.dataFormatada = this.formatarData(this.dataAtual);
  }

  formatarData(data: Date): string {
    return data.toISOString().split('T')[0];
  }

  reservarSelecionados() {
    this.indicesSelecionadosParaReservar = this.veiculosDoDia
      .map((v, i) => {
        const indexOriginal = this.veiculos.indexOf(v);
        return this.veiculoSelecionado[indexOriginal] && v.status === 'Liberado' ? indexOriginal : -1;
      })
      .filter(i => i !== -1);

    if (this.indicesSelecionadosParaReservar.length > 0) {
      this.mostrarModal = true;
    }
  }

  confirmarReserva() {
    if (!this.dataInicioReserva || !this.dataFimReserva) {
      alert("Selecione tanto a data de início quanto a de fim.");
      return;
    }

    this.indicesSelecionadosParaReservar.forEach(index => {
      this.veiculos[index].status = 'Reservado';
      this.veiculos[index].reservaInicio = this.dataInicioReserva;
      this.veiculos[index].reservaFim = this.dataFimReserva;
      this.veiculoSelecionado[index] = false;
    });

    this.fecharModal();
  }

  fecharModal() {
    this.mostrarModal = false;
    this.dataHoraReserva = '';
    this.indicesSelecionadosParaReservar = [];
  }
}
