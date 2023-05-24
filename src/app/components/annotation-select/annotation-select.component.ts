import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICoords } from "../../models/coords.interface";
import { EAnnotationType, IAnnotation } from "../../models/annotation.interface";
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

  @Output() createAnnotationEmitter: EventEmitter<IAnnotation> = new EventEmitter<IAnnotation>();

  constructor() { }

  public createAnnotation(type: EAnnotationType) {
    this.createAnnotationEmitter.emit({
      type,
      content: '',
      page: this.page,
      position: {
        x: this.coords.x,
        y: this.coords.y
      }
    })
  }

}
