import {
  Component,
  ComponentRef,
  ViewChild,
} from '@angular/core';

import { ICoords } from "../../models/coords.interface";
import { DynamicChildLoaderDirective } from "../../directives/dynamic-child-loader.directive";
import { AnnotationSelectComponent } from "../annotation-select/annotation-select.component";
import { AnnotationComponent } from "../annotation/annotation.component";
import { EAnnotationType } from "../../models/annotation.interface";


@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent {

  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  isAnnotationModalActive: boolean = false;
  annotationSelectRef: ComponentRef<AnnotationSelectComponent>;
  annotationsRef: ComponentRef<AnnotationComponent>;

  private loadDynamicAnnotationSelection(coords: ICoords) {
    this.isAnnotationModalActive = true;
    this.annotationSelectRef = this.dynamicChild.viewContainerRef.createComponent(AnnotationSelectComponent);
    this.annotationSelectRef.setInput('coords', coords);
    this.annotationSelectRef.instance.createAnnotationEmitter.subscribe(annotation => {
      console.log(annotation);
      this.destroyDynamicAnnotation();
      this.loadDynamicAnnotation(coords, annotation.type);
    })
  }
  private destroyDynamicAnnotation() {
    this.isAnnotationModalActive = false;
    this.annotationSelectRef.instance.createAnnotationEmitter.unsubscribe();
    this.annotationSelectRef.destroy();
  }

  private loadDynamicAnnotation(coords: ICoords, type: EAnnotationType) {
    this.annotationsRef = this.dynamicChild.viewContainerRef.createComponent(AnnotationComponent);
    this.annotationsRef.setInput('coords', coords);
  }

  public documentClick(event: MouseEvent) {
    console.log(event.target)
    const target = event.target as Element;
    if(target.classList.contains('document_container')) {
      const coords: ICoords = {x: event.offsetX, y: event.offsetY};
      if(!this.isAnnotationModalActive){
        this.loadDynamicAnnotationSelection(coords);
      } else {
        this.destroyDynamicAnnotation();
      }
    }
  }
}
