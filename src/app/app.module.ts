import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { TextboxComponent } from './textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    CharacterComponent,
    TextboxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
