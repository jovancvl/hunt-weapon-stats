import { Component } from '@angular/core';
import { SelectWeaponComponent } from "../../components/select-weapon-component/select-weapon-component";

@Component({
  selector: 'hunt-test',
  imports: [
    SelectWeaponComponent
],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {

}
