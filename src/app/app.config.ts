import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core'
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router'

import { routes } from './app.routes'
import { HttpClient, provideHttpClient } from '@angular/common/http'
import { tap } from 'rxjs'
import { DamageService } from './service/damage-service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(),
    provideAppInitializer(() => {
      const damageService = inject(DamageService)
      return damageService.getDamageCsv()
    })
  ]
}