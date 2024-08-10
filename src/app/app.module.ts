import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card'
import { MatTabGroup, MatTab } from '@angular/material/tabs'
import { MatInputModule } from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './src/app/components/login/login.component';
import { HomeComponent } from './src/app/components/home/home.component';
import { CursosComponent } from './src/app/components/cursos/cursos.component';
import { RotasAplicacao } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // CursosComponent,
    HomeComponent,
  ],
  imports: [
    RotasAplicacao,
    BrowserModule,
    MatCardModule,
    MatTabGroup,
    MatTab,
    MatInputModule,
    MatButtonModule,MatDividerModule,
    CursosComponent
      ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
