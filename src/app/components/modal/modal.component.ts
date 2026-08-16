import { Overlay } from '@angular/cdk/overlay';
import { Component, inject, input, model, OnDestroy } from '@angular/core';

@Component({
  selector: 'hunt-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnDestroy {
  overlay = inject(Overlay)
  scrollStrategy = this.overlay.scrollStrategies.block()

  title = input('')
  show = model(true);

  constructor() {
    this.scrollStrategy.enable()
  }

  ngOnDestroy(): void {
    this.scrollStrategy.disable()
  }

  cancel() {
    this.show.set(false)
  }
}
