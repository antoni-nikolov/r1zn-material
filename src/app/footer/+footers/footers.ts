import { Component } from '@angular/core';
import { Footer1 } from "../footer-1/footer-1";
import { Footer2 } from '../footer-2/footer-2';
import { Footer3 } from '../footer-3/footer-3';

@Component({
  selector: 'app-footers',
  imports: [Footer1, Footer2, Footer3],
  templateUrl: './footers.html',
  styleUrl: './footers.scss'
})
export class Footers {

}
