import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader, provideTranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideHttpClient(),
     provideRouter(routes),
     provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })]
};
