import { Component } from '@angular/core';
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'hunt-test',
  imports: [
    SelectWeaponComponent,
    ModalComponent
],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {

}
