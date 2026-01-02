import { Component, inject } from '@angular/core'
import { HunterBodyComponent } from "../../components/hunter-body-component/hunter-body-component"
import { ActivatedRoute, Router } from '@angular/router'
import { WEAPON_MAP } from '../../catalogue/__all-weapons'
import { Weapon } from '../../model/weapon'
import { WeaponInfoComponent } from "../../components/weapon-info-component/weapon-info-component"
import { BaseChartDirective } from "ng2-charts"
import { ChartConfiguration, Point } from 'chart.js'

@Component({
  selector: 'hunt-weapon-stats-page',
  imports: [HunterBodyComponent, WeaponInfoComponent, BaseChartDirective],
  templateUrl: './weapon-stats-page.html',
  styleUrl: './weapon-stats-page.scss'
})
export class WeaponStatsPage {
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)

  weapon = Weapon.EMPTY
  chartConfiguration: ChartConfiguration = {
    type: 'line',
    data: {
      datasets: [{
        data: [],
        tension: 0.1,
        borderWidth: 5,

        pointBackgroundColor: 'transparent',
        // pointRadius: 3,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'white',
        pointHoverRadius: 6,
        pointHoverBorderColor: 'transparent',

        segment: {
          borderColor: (ctx: any) => {
            const y = ctx.p1.parsed.y!
            if (y < 50) return '#9cffc5ff'
            if (y < 75) return '#2ecc71' //'#f1c40f'
            if (y < 100) return '#2ecc71'
            if (y < 125) return '#f1c40f' //'#e74c3c'
            if (y < 150) return '#e67e22' //'#9b59b6'
            return '#e74c3c'
          }
        }
      }]
    },
    options: {
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
  }

  constructor () {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (!id) {
      alert("weapon name not set, reload the page")
      throw new Error("weapon name not set")
    }

    const wn = WEAPON_MAP.get(id)
    if (!wn) {
      alert("weapon name not found")
      this.router.navigate([''])
      return
    }

    this.weapon = Object.assign({ ...wn })
    this.chartConfiguration.data.datasets[0].data = this.weapon.baseAmmo.getDamageArray().map((value, i) => ({x: i, y: value}) as Point)
  }
}
