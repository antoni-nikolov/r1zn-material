import { Routes } from '@angular/router';
import { Headers } from './header/+headers/headers';
import { Footers } from './footer/+footers/footers';

export const routes: Routes = [
    {
        path: 'headers',
        component: Headers
    },
      {
        path: 'footers',
        component: Footers
    }
];
