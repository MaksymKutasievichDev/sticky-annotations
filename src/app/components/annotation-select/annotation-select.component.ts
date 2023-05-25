import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICoords } from "../../interfaces/coords.interface";
import { EAnnotationType, IAnnotationCreation } from "../../interfaces/annotation.interface";
import { annotationOptionsConst, IAnnotationsOptions } from "../../constants/annotation-options";

@Component({
  selector: 'app-annotation-select',
  templateUrl: './annotation-select.component.html',
  styleUrls: ['./annotation-select.component.scss']
})
export class AnnotationSelectComponent {

  public annotationOptions: IAnnotationsOptions[] = annotationOptionsConst;

  @Input() coords: ICoords;
  @Input() page: number;

  @Output() createAnnotationEmitter: EventEmitter<IAnnotationCreation> = new EventEmitter<IAnnotationCreation>();

  constructor() { }

  public createAnnotation(type: EAnnotationType) {
    this.createAnnotationEmitter.emit({
      type,
      position: {
        x: this.coords.x,
        y: this.coords.y
      }
    })
  }

}
