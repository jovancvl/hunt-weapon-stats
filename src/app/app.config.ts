import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core'
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router'
import { routes } from './app.routes'
import { provideHttpClient, withXhr } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withXhr()),
  ]
}