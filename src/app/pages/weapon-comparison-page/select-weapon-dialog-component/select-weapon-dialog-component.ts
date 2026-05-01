import { Component, inject} from '@angular/core';
import { SelectWeaponComponent } from "../../../components/select-weapon-component/select-weapon-component";
import { DialogRef } from '@angular/cdk/dialog'
import { WeaponV2 } from '../../../model/v2/weapon-v2';

@Component({
  selector: 'hunt-select-weapon-dialog-component',
  imports: [SelectWeaponComponent],
  templateUrl: './select-weapon-dialog-component.html',
  styleUrl: './select-weapon-dialog-component.scss',
})
export class SelectWeaponDialogComponent {
  dialogRef = inject(DialogRef<WeaponV2>)

  close() {
    this.dialogRef.close()
  }

  onSelect(w: WeaponV2) {
    this.dialogRef.close(Object.assign({ ...w }))
  }
}
