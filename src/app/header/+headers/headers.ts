import { Component } from '@angular/core';
import { Header1 } from '../header-1/header-1';
import { Header2 } from '../header-2/header-2';

@Component({
  selector: 'app-headers',
  imports: [
    Header1,
    Header2
  ],
  templateUrl: './headers.html',
  styleUrl: './headers.scss'
})
export class Headers {

}
