import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { IAnnotation } from "../../../interfaces/annotation.interface";
import { AnnotationsService } from "../../../services/annotations.service";

@Component({
  selector: 'app-annotation-text',
  templateUrl: './annotation-text.component.html',
  styleUrls: ['./annotation-text.component.scss']
})
export class AnnotationTextComponent {

  inputField: FormControl = new FormControl<string>('');

  @Input() annotation: IAnnotation;
  @Output() updatedTextEmitter = new EventEmitter<string>();

  constructor(
    private annotationService: AnnotationsService
  ) {
  }

  updateText() {
    this.annotationService.updateAnnotationContent(this.annotation.id, this.inputField.value);
  }
}
