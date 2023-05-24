import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentContainerComponent } from './components/document-container/document-container.component';
import { HeaderComponent } from './components/header/header.component';
import { DynamicChildLoaderDirective } from "./directives/dynamic-child-loader.directive";
import { NgOptimizedImage } from "@angular/common";
import { AnnotationSelectComponent } from "./components/annotation-select/annotation-select.component";
import { AnnotationComponent } from './components/annotation/annotation.component';
import { AnnotationTextComponent } from './components/annotation/annotation-text/annotation-text.component';
import { AnnotationImageComponent } from './components/annotation/annotation-image/annotation-image.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentContainerComponent,
    HeaderComponent,
    AnnotationSelectComponent,
    DynamicChildLoaderDirective,
    AnnotationComponent,
    AnnotationTextComponent,
    AnnotationImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
