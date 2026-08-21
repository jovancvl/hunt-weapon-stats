import { Component, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'hunt-bottom-buttons',
  imports: [],
  templateUrl: './bottom-buttons.component.html',
  styleUrl: './bottom-buttons.component.scss',
})
export class BottomButtonsComponent implements OnInit, OnDestroy {
  renderer = inject(Renderer2)

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'body-bottom-pad')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'body-bottom-pad')
  }
}
