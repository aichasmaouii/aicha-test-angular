import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AichaListRes } from './aicha-list-res/aicha-list-res';
import { AichaDetailsRes } from './aicha-details-res/aicha-details-res';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    AichaListRes,
    AichaDetailsRes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
