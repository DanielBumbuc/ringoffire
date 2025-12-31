import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { PlayerComponent } from '../player/player.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-dialog-add-player',
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    // PlayerComponent, 
    MatInputModule, 
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './dialog-add-player.component.html',
    styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  readonly dialogRef = inject(MatDialogRef);
  name: string = '';

  onNoClick(): void {
    this.dialogRef.close(); // ✅ Schließt diesen Dialog
  }
}
