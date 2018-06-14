import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Apollo
import { GraphQLModule } from './graphql.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
