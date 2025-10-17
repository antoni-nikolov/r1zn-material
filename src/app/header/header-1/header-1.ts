import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-1',
  imports: [
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './header-1.html',
  styleUrl: './header-1.scss',
})
export class Header1 {
  @ViewChild('drawer') drawer!: MatSidenav;
  isAdmin = true; // или по логиката на твоето приложение
}
