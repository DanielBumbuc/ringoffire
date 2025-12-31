import { Component, inject } from '@angular/core';
import { NgStyle, NgClass } from "@angular/common";
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-game',
  imports: [
    NgStyle,
    NgClass,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameInfoComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  game!: Game;
  takeCardAnimation = false;
  currentCard: string = '';
  readonly dialog = inject(MatDialog);
  readonly playerInfo = [
    {
      backgroundColor: '#4C5AA5',
      imgSrc: 'assets/img/profile_woman_1.png',
    },
    {
      backgroundColor: '#EE4B68',
      imgSrc: 'assets/img/profile_woman_2.png',
    },
    {
      backgroundColor: '#73D658',
      imgSrc: 'assets/img/profile_man_1.png',
    },
    {
      backgroundColor: '#886C60',
      imgSrc: 'assets/img/profile_man_2.png',
    }
  ];


  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.takeCardAnimation) {

      if (this.game.cardStack.length > 0) {
        this.currentCard = this.game.cardStack.pop() ?? '';
        this.takeCardAnimation = true;
        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      } else {
        console.log('no cards');
      }

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.takeCardAnimation = false;
      }, 1500);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      const styleIndex = this.game.players.length % this.playerInfo.length;
      const style = this.playerInfo[styleIndex];
      
      
      if (name) {
        const newPlayer = {
          name: name,
          id: this.game.players.length,
          profileImg: style.imgSrc,
          backgroundColor: style.backgroundColor
        };

        this.game.players.push(newPlayer);

      }
    });
  }



}
