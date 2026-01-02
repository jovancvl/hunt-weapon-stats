import { Component, inject} from '@angular/core';
import { SelectWeaponComponent } from "../../../components/select-weapon-component/select-weapon-component";
import { DialogRef } from '@angular/cdk/dialog'
import { Weapon } from '../../../model/weapon'

@Component({
  selector: 'hunt-select-weapon-dialog-component',
  imports: [SelectWeaponComponent],
  templateUrl: './select-weapon-dialog-component.html',
  styleUrl: './select-weapon-dialog-component.scss',
})
export class SelectWeaponDialogComponent {
  dialogRef = inject(DialogRef<Weapon>)

  close() {
    this.dialogRef.close()
  }

  onSelect(w: Weapon) {
    this.dialogRef.close(Object.assign({ ...w }))
  }
}
