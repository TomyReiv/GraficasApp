import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{
  ngOnInit(): void {
    if (this.horizontal){
      //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;
  }
  }

  @Input() horizontal: boolean = false;
  @Input() barChartData: ChartData<'bar'> = {
    labels:[],
    datasets: []
  };


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  
  public barChartType: ChartType = 'bar';

 
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}
