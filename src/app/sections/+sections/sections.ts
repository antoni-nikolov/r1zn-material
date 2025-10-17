import { Component } from '@angular/core';
import { Section1 } from "../section-1/section-1";
import { Section2 } from "../section-2/section-2";
import { Section3 } from "../section-3/section-3";

@Component({
  selector: 'app-sections',
  imports: [Section1, Section2, Section3],
  templateUrl: './sections.html',
  styleUrl: './sections.scss'
})
export class Sections {

}
