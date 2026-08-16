import { Overlay } from '@angular/cdk/overlay';
import { Component, effect, inject, input, model } from '@angular/core';

@Component({
  selector: 'hunt-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent  {
  overlay = inject(Overlay)
  scrollStrategy = this.overlay.scrollStrategies.block()

  title = input('')
  show = model(true);

  constructor() {
    effect(() => {
      if (this.show()) {
        this.scrollStrategy.enable()
      } else {
        this.scrollStrategy.disable()
      }
    })
  }

  cancel() {
    this.show.set(false)
  }
}
