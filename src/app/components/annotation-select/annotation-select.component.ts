import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICoords } from "../../interfaces/coords.interface";
import { EAnnotationType, IAnnotationCreation } from "../../interfaces/annotation.interface";
import { ANNOTATIONS_OPTIONS, IAnnotationsOptions } from "../../constants/annotation-options";

@Component({
  selector: 'app-annotation-select',
  templateUrl: './annotation-select.component.html',
  styleUrls: ['./annotation-select.component.scss']
})
export class AnnotationSelectComponent {

  public annotationOptions: IAnnotationsOptions[] = ANNOTATIONS_OPTIONS;

  @Input() coords: ICoords;
  @Input() page: number;

  @Output() createAnnotationEmitter: EventEmitter<IAnnotationCreation> = new EventEmitter<IAnnotationCreation>();

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
