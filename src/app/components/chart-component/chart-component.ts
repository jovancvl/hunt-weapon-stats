import { Component, effect, input, output } from '@angular/core'
import { AmmoStats } from '../../model/ammo-stats'
import { NgxEchartsDirective } from 'ngx-echarts'
import { ECElementEvent, ECharts, EChartsCoreOption, EChartsType } from 'echarts/core'

@Component({
  selector: 'hunt-chart-component',
  imports: [NgxEchartsDirective],
  templateUrl: './chart-component.html',
  styleUrl: './chart-component.scss',
})
export class ChartComponent {
  ammo = input.required<AmmoStats>()
  rangeSelected = output<number>()
  
  chartOptions: EChartsCoreOption = {
    xAxis: {
      type: 'value',
      min: 0,
      max: 100,
      name: 'Range',
      nameLocation: 'start',
      interval: 10,
      splitLine: { show: false },
    },

    yAxis: {
      type: 'value',
      min: 0,
      max: 150,
      name: 'Damage',
      nameLocation: 'middle',
      interval: 25,
      splitLine: { show: false },
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: (params: any[]) => {
        const p = params[0]
        const damage = Math.floor(p.value[1])
        const range = p.value[0]
        return `Damage: ${damage}\nRange: ${range}m`
      }
    },

    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 50
    },

    visualMap: [{
      pieces: [
        { gte: 0, lt: 50, color: '#ECEFF1' },
        { gte: 50, lt: 75, color: '#CCFF90' },
        { gte: 75, lt: 100, color: '#64DD17' },
        { gte: 100, lt: 125, color: '#FFD600' },
        { gte: 125, lt: 150, color: '#FF6D00' },
        { gte: 150, color: '#DD2C00' }
      ],
      outOfRange: { color: '#999' },
      show: false
    }],
  };


  config = effect(() => {
    const damageArray = this.ammo().getDamageArray()

    this.chartOptions = {
      ...this.chartOptions,
      series: [
        {
          name: 'Damage',
          type: 'line',
          smooth: true,
          symbol: 'emptyCircle',
          showSymbol: false,
          lineStyle: {
            width: 4
          },
          data: damageArray.map((damage, range) => [range, damage]),

          markLine: {
            symbol: 'none',
            z: 0,
            animationDuration: 500,
            animationEasing: 'sinusoidalInOut',
            lineStyle: {
              color: '#303030',
              type: 'dashed',
              width: 1,
            },
            label: {
              show: false,
            },
            emphasis: {
              lineStyle: {
                // type: 'solid',
                color: '#606060',
                width: 2,
              },
              label: {
                show: true,
                position: 'bottom',
                align: 'center',
                verticalAlign: 'top',
                distance: 41,
                color: 'white',
                borderWidth: 0,
                formatter: (params: any) => {
                  return params.name
                }
              }
            },
            data: this.calculateCombinations()
          }
        },
      ]
    }
  });

  calculateCombinations() {
    const result: { xAxis: number, name: string }[] = []

    const parts = ['chest', 'cock', 'arms', 'legs']

    // loop over all unique pairs (including same-part pairs)
    for (let i = 0; i < parts.length; i++) {
      for (let j = i; j < parts.length; j++) {
        let part1 = parts[i]
        let part2 = parts[j]

        const range = this.findRange(part1 as any, part2 as any)

        if (range > 0 && range <= 100) {
          part1 = part1 === 'cock' ? 'crotch' : part1
          part2 = part2 === 'cock' ? 'crotch' : part2
          const name = `${range}m\n\n${part1} + ${part2}`

          result.push({ xAxis: range, name })
        }
      }
    }

    return result
  }


  findRange(bodypartOne: 'chest' | 'cock' | 'legs' | 'arms', bodypartTwo: 'chest' | 'cock' | 'legs' | 'arms') {
    let found = false
    let range = 0
    while (range <= 100 && !found) {
      const leftDamage = this.ammo().calculateDamage(range)[bodypartOne]
      const rightDamage = this.ammo().calculateDamage(range)[bodypartTwo]
      if (leftDamage + rightDamage < 150) {
        found = true
      } else {
        range++
      }
    }

    if (found) {
      range--
    }
    
    return range
  }

  onChartClick(event: ECElementEvent) {
    console.log(event)
    if (event.componentType !== "series" && event.componentType !== "markLine") {
      return
    }
    const range: number = Array.isArray(event.value) ? event.value[0] as number : event.value as number
    this.rangeSelected.emit(range)
  }
}
