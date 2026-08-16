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
        console.log("Scroll blocked by title", this.title())
        this.scrollStrategy.enable()
      } else {
        console.log("Scroll enabled by title", this.title())
        this.scrollStrategy.disable()
      }
    })
  }

  cancel() {
    this.show.set(false)
  }
}
