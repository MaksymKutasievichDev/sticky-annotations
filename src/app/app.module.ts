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
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';

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
    HomeComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
