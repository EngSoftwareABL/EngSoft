import { Component, OnInit } from '@angular/core';
import { VeiculoService, Veiculo } from './veiculo.service';

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.css']
})
export class ListaVeiculosComponent implements OnInit {
  veiculos: Veiculo[] = [];
  veiculosDoDia: Veiculo[] = [];
  veiculoSelecionado: boolean[] = [];

  dataAtual: Date = new Date();
  mostrarModal = false;
  dataInicioReserva = '';
  dataFimReserva = '';

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  get dataFormatada(): string {
    return this.dataAtual.toLocaleDateString('pt-BR');
  }

  alterarData(dias: number): void {
    this.dataAtual.setDate(this.dataAtual.getDate() + dias);
    this.filtrarVeiculosPorData();
  }

  carregarVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe({
      next: (dados) => {
        this.veiculos = dados;
        this.filtrarVeiculosPorData();
      },
      error: (err) => {
        console.error('Erro ao carregar veículos:', err);
        alert('Erro ao carregar veículos.');
      }
    });
  }

  filtrarVeiculosPorData(): void {
    const dataStr = this.dataAtual.toISOString().split('T')[0]; // yyyy-MM-dd
    this.veiculosDoDia = this.veiculos.filter(v =>
      v.disponibilidade.includes(dataStr)
    );
    this.veiculoSelecionado = this.veiculosDoDia.map(() => false);
  }

  confirmarReserva(): void {
    // Apenas um placeholder por enquanto
    alert('Reserva confirmada (simulada).');
    this.fecharModal();
  }
  
  fecharModal(): void {
    this.mostrarModal = false;
    this.dataInicioReserva = '';
    this.dataFimReserva = '';
  }

  // os métodos de reserva ficam aqui futuramente
}