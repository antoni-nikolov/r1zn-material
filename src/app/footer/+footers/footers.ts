import { Component } from '@angular/core';
import { Footer1 } from "../footer-1/footer-1";
import { Footer2 } from '../footer-2/footer-2';

@Component({
  selector: 'app-footers',
  imports: [Footer1, Footer2],
  templateUrl: './footers.html',
  styleUrl: './footers.scss'
})
export class Footers {

}
