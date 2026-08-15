import { Component, input, output } from '@angular/core';

export interface ModalResult {
  reason: 'cancel' | 'ok';
  data?: any;
}

@Component({
  selector: 'hunt-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  title = input('')

  modalClosed = output<ModalResult>()

  cancel() {
    this.modalClosed.emit({
      reason: 'cancel'
    })
  }
}
