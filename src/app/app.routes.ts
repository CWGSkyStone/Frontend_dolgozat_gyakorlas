/*
File: app.routes.ts
Author: Szabó József
Copyright: 2026, Szabó József
Group: Szoft II/N
Date: 2026-09-30
Github: https://github.com/CWGSkyStone/
Licenc: GNU GPL
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GulaComponent } from './gula/gula.component';

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "home",component:HomeComponent},
    {path: "about",component:AboutComponent},
    {path: "gula",component:GulaComponent}
];
