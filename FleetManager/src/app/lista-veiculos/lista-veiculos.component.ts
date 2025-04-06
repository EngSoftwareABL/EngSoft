import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Certifique-se de que o FormsModule está importado no módulo

interface Veiculo {
  modelo: string;
  placa: string;
  manutencao: string;
  quilometragem: number;
  status: string;
  reservaInicio?: string; // Data de início da reserva
  reservaFim?: string; // Data de fim da reserva
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

  veiculos: Veiculo[] = [
    { modelo: 'Ford Ka', placa: 'ABC-1234', manutencao: '2025-04-02', quilometragem: 45000, status: 'Reservado' },
    { modelo: 'Ford Fiesta', placa: 'DEF-5678', manutencao: '2025-03-12', quilometragem: 38000, status: 'Liberado' },
    { modelo: 'Ford Ranger', placa: 'GHI-9012', manutencao: '2025-02-15', quilometragem: 62000, status: 'Liberado' },
    { modelo: 'Ford EcoSport', placa: 'JKL-3456', manutencao: '2025-03-18', quilometragem: 52000, status: 'Liberado' },
    { modelo: 'Ford Focus', placa: 'MNO-6789', manutencao: '2025-01-20', quilometragem: 41000, status: 'Liberado' },
  ];

  veiculoSelecionado: boolean[] = Array(this.veiculos.length).fill(false);

  // 🆕 Variáveis para o modal
  mostrarModal = false;
  dataHoraReserva: string = '';
  indicesSelecionadosParaReservar: number[] = [];

  alterarData(dias: number) {
    this.dataAtual.setDate(this.dataAtual.getDate() + dias);
    this.dataFormatada = this.formatarData(this.dataAtual);
  }

  formatarData(data: Date): string {
    return data.toISOString().split('T')[0];
  }

  // 🆕 Agora abre o modal
  reservarSelecionados() {
    this.indicesSelecionadosParaReservar = this.veiculos
      .map((v, i) => (this.veiculoSelecionado[i] && v.status === 'Liberado' ? i : -1))
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
