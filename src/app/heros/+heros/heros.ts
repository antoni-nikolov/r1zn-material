import { Component } from '@angular/core';
import { Hero1 } from '../hero-1/hero-1';

@Component({
  selector: 'app-heros',
  imports: [
    Hero1
  ],
  templateUrl: './heros.html',
  styleUrl: './heros.scss'
})
export class Heros {

}
