import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatExpansionModule
  ],
   exports: [
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatExpansionModule
   ]
})
export class BibliotecasExternas { }
