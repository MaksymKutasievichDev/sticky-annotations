import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { IAnnotation } from "../../../models/annotation.interface";

@Component({
  selector: 'app-annotation-text',
  templateUrl: './annotation-text.component.html',
  styleUrls: ['./annotation-text.component.scss']
})
export class AnnotationTextComponent {

  inputField: FormControl = new FormControl<string>('');

  @Input() annotation: IAnnotation;
  @Output() updatedTextEmitter = new EventEmitter<string>();

  updateText() {
    this.updatedTextEmitter.emit(this.inputField.value);
  }
}
