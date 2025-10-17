import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header-3',
  imports: [MatButtonModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './header-3.html',
  styleUrl: './header-3.scss',
})
export class Header3 {
  menuOpen = false;
}
