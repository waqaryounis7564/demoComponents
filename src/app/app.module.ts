import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CnvrtPipe } from './cnvrt.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import { ClassDirectiveDirective } from './class-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CnvrtPipe,
    PaginationComponent,
    ClassDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
