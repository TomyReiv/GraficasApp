import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
    `
    .contenedor{
      max-height: 300px;
    }
    `
  ]
})
export class DonaComponent {
 // Doughnut
 public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
 public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   datasets: [
     { data: [ 350, 450, 100 ], backgroundColor: ['red', 'green', 'blue'] },
   ]
 };
 public doughnutChartType: ChartType = 'doughnut';

 // events
 public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
   console.log(event, active);
 }
}

