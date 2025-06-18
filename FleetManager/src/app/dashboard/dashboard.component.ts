import { Component, OnInit } from '@angular/core';
import { DashboardService, DashboardResumo } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  resumo!: DashboardResumo;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getResumo().subscribe(res => this.resumo = res);
  }
}