import { Component, Input } from '@angular/core';
// import { NgClass } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player',
  imports: [NgClass],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

  @Input() playerActive: boolean = false;
  @Input() name: string = '';
  @Input() profileImg: string = '';
}
