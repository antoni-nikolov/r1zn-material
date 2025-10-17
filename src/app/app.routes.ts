import { Routes } from '@angular/router';
import { Headers } from './header/+headers/headers';
import { Footers } from './footer/+footers/footers';
import { Widgets } from './widgets/+widgets/widgets';
import { Sections } from './sections/+sections/sections';
import { Cards } from './cards/+cards/cards';
import { Heroes } from './heroes/+heroes/heroes';

export const routes: Routes = [
  {
    path: 'headers',
    component: Headers,
  },
  {
    path: 'footers',
    component: Footers,
  },
  {
    path: 'heroes',
    component: Heroes,
  },
  {
    path: 'sections',
    component: Sections,
  },
  {
    path: 'cards',
    component: Cards,
  },
  {
    path: 'widgets',
    component: Widgets,
  },
];
