import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'

import { provideEchartsCore } from 'ngx-echarts'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, LegendComponent, MarkLineComponent, TooltipComponent, VisualMapComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([CanvasRenderer, LineChart, TooltipComponent, GridComponent, MarkLineComponent, VisualMapComponent]);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(),
    provideEchartsCore({ echarts }),
  ]
}