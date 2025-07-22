import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';

@Component({
  selector: 'ion-icon-wrapper',
  imports: [],
  templateUrl: './ion-icons-wrapper.html',
  styleUrl: './ion-icons-wrapper.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IonIconsWrapper {
  name = input.required<string>()
}
