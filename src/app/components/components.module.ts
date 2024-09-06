import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BibliotecasExternas } from '../bibliotecas_externas/BibliotecasExternas.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BibliotecasExternas,
    BrowserModule
  ],
   exports: [
    HeaderComponent,
   ]
})
export class ComponentsModule { }
