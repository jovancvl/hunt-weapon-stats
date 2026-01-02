import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DamageService {
  http = inject(HttpClient)

  damageMap: Map<string, number[]> = new Map()

  getDamageArray(name: string) {
    const result = this.damageMap.get(name)
    if (!result) {
      throw new Error("Weapon not found")
    }
    return result
  }

  getDamageCsv() {
    return this.http.get('damage-chart.csv', {
        responseType: 'text'
      }).pipe(
        tap(csv => this.parseDamageCsv(csv))
      )
  }

  parseDamageCsv(csv: string) {
    const lines = csv.split('\n').slice(1)
    for (const l of lines) {
      const fields = l.split(',')
      const name = fields[0]
      const damageValues = fields.slice(1).map(s => parseInt(s))
      this.damageMap.set(name, damageValues)
    }
    console.log(this.damageMap)
  }
}
