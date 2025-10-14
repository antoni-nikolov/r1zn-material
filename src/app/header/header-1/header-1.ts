import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-1',
  imports: [
    RouterModule,
    MatButtonModule, 
    MatDividerModule, 
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './header-1.html',
  styleUrl: './header-1.scss'
})
export class Header1 {

}
