import { Component, input, output, computed } from '@angular/core';
import { AmmoStats } from '../../model/ammo-stats';
import { NgxEchartsDirective } from 'ngx-echarts';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, MarkLineComponent, TooltipComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

import { ECElementEvent, EChartsCoreOption } from 'echarts/core';

echarts.use([CanvasRenderer, LineChart, TooltipComponent, GridComponent, MarkLineComponent, VisualMapComponent]);

@Component({
  selector: 'hunt-chart-component',
  imports: [NgxEchartsDirective],
  providers: [
    provideEchartsCore({ echarts }),
  ],
  templateUrl: './chart-component.html',
  styleUrl: './chart-component.scss',
})
export class ChartComponent {
  ammo = input.required<AmmoStats[]>();
  rangeSelected = output<number>();
  readonly colors = [
    'lightgrey',
    'goldenrod',
    'red',
    'blue',
    'green'
  ];

  options = computed<EChartsCoreOption>(() => {
    const baseOptions: EChartsCoreOption = {
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
          let finalString = `Range: ${params[0].value[0]}</br>`;
          for (let i = 0; i < params.length; i++) {
            const p = params[i];
            const damage = Math.floor(p.value[1]);
            finalString += `Damage: ${damage}</br>`;
          }
          return finalString;
        }
      },

      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 50
      },
    };

    baseOptions['series'] = this.calculateSeries()

    if (this.ammo().length === 1) {
      baseOptions['visualMap'] = [{
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
      }];
    }

    return baseOptions
  })

  calculateSeries() {
    const resultSeries = [];
    const baseSerie = {
      name: 'Damage',
      type: 'line',
      smooth: true,
      symbol: 'emptyCircle',
      showSymbol: false,
      lineStyle: {
        color: 'white',
        width: 5
      },
      data: [] // required
    };
    const baseMarkline = {
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
            return params.name;
          }
        }
      },
      data: [] // required
    };

    for (let i = 0; i < this.ammo().length; i++) {
      const a = this.ammo()[i];
      const damageArray = a.getDamageArray();

      const newSerie = {
        ...baseSerie,
        data: damageArray.map((damage, range) => [range, damage]),
        itemStyle: {
          color: this.ammo().length > 1 ? this.colors[i] : undefined // overrides visualMap from above if defined
        },
        lineStyle: {
          ...baseSerie.lineStyle,
          color: this.ammo().length > 1 ? this.colors[i] : undefined // overrides visualMap from above if defined
        },
        markLine: {
          ...baseMarkline,
          data: this.calculateCombinations(a)
        }
      };

      resultSeries.push(newSerie);
    }

    return resultSeries;
  }

  calculateCombinations(ammo: AmmoStats) {
    if (this.ammo().length > 1) {
      return [];
    }

    const result: { xAxis: number, name: string; }[] = [];

    const parts = ['chest', 'cock', 'arms', 'legs'];

    // loop over all unique pairs (including same-part pairs)
    for (let i = 0; i < parts.length; i++) {
      for (let j = i; j < parts.length; j++) {
        let part1 = parts[i];
        let part2 = parts[j];

        const range = this.findRange(part1 as any, part2 as any, ammo);

        if (range > 0 && range <= 100) {
          part1 = part1 === 'cock' ? 'crotch' : part1;
          part2 = part2 === 'cock' ? 'crotch' : part2;
          const name = `${range}m\n\n${part1} + ${part2}`;

          result.push({ xAxis: range, name });
        }
      }
    }

    return result;
  }


  findRange(bodypartOne: 'chest' | 'cock' | 'legs' | 'arms', bodypartTwo: 'chest' | 'cock' | 'legs' | 'arms', ammo: AmmoStats) {
    let found = false;
    let range = 0;
    while (range <= 100 && !found) {
      const leftDamage = ammo.calculateDamage(range)[bodypartOne];
      const rightDamage = ammo.calculateDamage(range)[bodypartTwo];
      if (leftDamage + rightDamage < 150) {
        found = true;
      } else {
        range++;
      }
    }

    if (found) {
      range--;
    }

    return range;
  }

  onChartClick(event: ECElementEvent) {
    if (event.componentType !== "series" && event.componentType !== "markLine") {
      return;
    }
    const range: number = Array.isArray(event.value) ? event.value[0] as number : event.value as number;
    this.rangeSelected.emit(range);
  }
}
