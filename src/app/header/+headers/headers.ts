import { Component } from '@angular/core';
import { Header1 } from '../header-1/header-1';
import { Header2 } from '../header-2/header-2';
import { Header3 } from '../header-3/header-3';
import { Card3 } from '../../cards/card-3/card-3';

@Component({
  selector: 'app-headers',
  imports: [Header1, Header2, Header3],
  templateUrl: './headers.html',
  styleUrl: './headers.scss',
})
export class Headers {}
