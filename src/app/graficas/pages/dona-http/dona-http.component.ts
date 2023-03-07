import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';




@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
    `
    .contenedor{
      max-height: 300px;
    }
    `
  ]
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficasService: GraficasService) { }

  data: any[] = []


  ngOnInit(): void {
    this.graficasService.getUsauariosRedes().subscribe(data => {
      
      const labels = Object.keys(data);
      const values = Object.values(data);
      this.data = labels;

      labels.forEach(element => {
        this.doughnutChartLabels.push(element);
      });

      values.forEach(element => {
        this.doughnutChartData.datasets[0].data.push(element)
      });

    })

  }



  // Doughnut
  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
      },
    ],
  };

  /*  public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, 100 ], backgroundColor: ['red', 'green', 'blue'] },
     ]
   }; */
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
