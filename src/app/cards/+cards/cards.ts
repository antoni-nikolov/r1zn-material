import { Component } from '@angular/core';
import { Card1 } from '../card-1/card-1';
import { Card2 } from '../card-2/card-2';
import { Card3 } from '../card-3/card-3';

@Component({
  selector: 'app-cards',
  imports: [
    Card1,
    Card2,
    Card3
  ],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards {

}
