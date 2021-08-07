import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { TRANSLOCO_CONFIG } from '@ngneat/transloco';
import { httpLoader } from './services/shared/http-loader';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent, LayoutComponent, NavbarComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslocoRootModule,
  ],
  providers: [
    httpLoader,
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        reRenderOnLangChange: true,
        availableLangs: ['en', 'ru'],
        prodMode: environment.production,
        defaultLang: 'en',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
