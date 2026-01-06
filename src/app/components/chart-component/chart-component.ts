import { Component, effect, input } from '@angular/core'
import { ChartData, ChartEvent, ChartOptions, Point } from 'chart.js'
import { BaseChartDirective } from "ng2-charts"
import { AmmoStats } from '../../model/ammo-stats'

@Component({
  selector: 'hunt-chart-component',
  imports: [BaseChartDirective],
  templateUrl: './chart-component.html',
  styleUrl: './chart-component.scss',
})
export class ChartComponent {
  ammo = input.required<AmmoStats>()

  config = effect(() => {
    this.data.datasets[0].data = this.ammo().getDamageArray().map((value, i) => ({ x: i, y: value }) as Point)
    this.data = { ...this.data }
  })

  data: ChartData = {
    datasets: [{
      data: [],
      tension: 0.1,
      borderWidth: 5,

      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: 'white',
      pointHoverRadius: 6,
      pointHoverBorderColor: 'transparent',

      segment: {
        borderColor: (ctx: any) => {
          const y = ctx.p1.parsed.y!
          if (y < 50) return '#ECEFF1'
          if (y < 75) return '#CCFF90' //'#f1c40f'
          if (y < 100) return '#64DD17'
          if (y < 125) return '#FFD600' //'#e74c3c'
          if (y < 150) return '#FF6D00' //'#9b59b6'
          return '#DD2C00'
        }
      }
    }]
  }

  options: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Range'
        }
      },
      y: {
        min: 0,
        max: 150,
        title: {
          display: true,
          text: 'Damage'
        },
        ticks: {
          stepSize: 25
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            const x = context[0].parsed.x
            const y = context[0].parsed.y
            return `${y} dmg | ${x}m`
          },
          label: () => {
            return ``
          }
        }
      }
    }
  }

  onChartClick(event: { event?: ChartEvent, active?: any[] }) {
    if (!event.active || event.active.length === 0) {
      return
    }
    const range = event.active[0].element.parsed.x
    const damage = event.active[0].element.parsed.y
  }
}
