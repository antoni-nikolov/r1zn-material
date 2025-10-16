import { Component } from '@angular/core';
import { Footer1 } from "../footer-1/footer-1";
import { Footer2 } from '../footer-2/footer-2';
import { Footer3 } from '../footer-3/footer-3';
import { Footer4 } from '../footer-4/footer-4';
import { Footer5 } from "../footer-5/footer-5";
import { Footer6 } from '../footer-6/footer-6';

@Component({
  selector: 'app-footers',
  imports: [Footer1, Footer2, Footer3, Footer4, Footer5, Footer6],
  templateUrl: './footers.html',
  styleUrl: './footers.scss'
})
export class Footers {

}
