import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent {

public proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  };
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  public productoData: ChartData<'bar'>= {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
    ]
  };
}
