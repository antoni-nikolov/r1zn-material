import { Component } from '@angular/core';
import { Hero1 } from '../hero-1/hero-1';
import { Hero2 } from '../hero-2/hero-2';
import { Hero3 } from '../hero-3/hero-3';
import { Hero4 } from '../hero-4/hero-4';
import { Hero5 } from "../hero-5/hero-5";

@Component({
  selector: 'app-heroes',
  imports: [
    Hero1,
    Hero2,
    Hero3,
    Hero4,
    Hero5
],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {

}
