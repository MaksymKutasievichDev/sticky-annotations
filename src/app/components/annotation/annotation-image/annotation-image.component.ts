import { Component, Input } from '@angular/core';
import { IAnnotation } from "../../../models/annotation.interface";
import { AnnotationsService } from "../../../services/annotations.service";

@Component({
  selector: 'app-annotation-image',
  templateUrl: './annotation-image.component.html',
  styleUrls: ['./annotation-image.component.scss']
})
export class AnnotationImageComponent {
  @Input() annotation: IAnnotation;

  constructor(
    private annotationService: AnnotationsService
  ) {
  }

  transformToString(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.annotationService.updateAnnotationContent(this.annotation.id, reader.result! as string)
      }
      reader.readAsDataURL(file);
    }
  }
}
