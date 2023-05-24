import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAnnotation } from "../../../models/annotation.interface";

@Component({
  selector: 'app-annotation-image',
  templateUrl: './annotation-image.component.html',
  styleUrls: ['./annotation-image.component.scss']
})
export class AnnotationImageComponent {
  @Input() annotation: IAnnotation;
  @Output() updatedTextEmitter = new EventEmitter<string>();
  transformToString(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.updatedTextEmitter.emit(reader.result! as string);
        console.log(reader.result! as string)
      }
      reader.readAsDataURL(file);
    }
  }
}
