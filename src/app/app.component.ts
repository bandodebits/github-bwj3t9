import { Component } from '@angular/core';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartConfiguration,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Débito',
        backgroundColor: '#ffa600',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Crédito',
        backgroundColor: '#ff6e54',
      },
      {
        data: [29, 18, 20, 33, 22, 23, 30],
        label: 'Pix',
        backgroundColor: '#dd5182',
      },
      {
        data: [2, 5, 3, 6, 3, 4, 9],
        label: 'Boleto',
        backgroundColor: '#955196',
      },
      {
        data: [2, 5, 3, 6, 3, 4, 9],
        label: 'Dinheiro',
        backgroundColor: '#444e86',
      },
      {
        data: [1, 2, 1, 3, 1, 2, 1],
        label: 'Bônus',
        backgroundColor: '#003f5c',
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        fullSize: true,
        position: 'bottom',
        // display: true,
        labels: {
          boxWidth: 14,
          boxHeight: 14,
          borderRadius: 7,
          useBorderRadius: true,
        },
      },
    },

    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        // display: false,
        grid: {
          display: false,
          color: 'rgba(219, 219, 219, 0.3)',
        },
        stacked: true,
      },
    },
  };

  constructor() {}
}
