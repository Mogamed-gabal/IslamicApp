import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { QuranComponent } from './layout/quran/quran.component';
import { AzkarComponent } from './layout/asmaa/asmaa.component';
import { ReadComponent } from './quran/read/read.component';
import { ListenComponent } from './quran/listen/listen.component';
import { ZekrComponent } from './layout/zekr/zekr.component';

export const routes: Routes = [
    
    {path:'home',component:HomeComponent,title:'home'},
    {path:'quran',component:QuranComponent,title:'quiraan'},
    {path:'asmaa',component:AzkarComponent,title:'asmaa'},
    {path:'Azkar',component:ZekrComponent,title:'Azkar'},
    {path:'',component:HomeComponent,title:'home'},
    { path: 'quran/read', component:ReadComponent },
    { path: 'quran/listen', component: ListenComponent },
];
