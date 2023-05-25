import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICoords } from "../../interfaces/coords.interface";
import { EAnnotationType, IAnnotation } from "../../interfaces/annotation.interface";
import { AnnotationsService } from "../../services/annotations.service";

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent {

  @Input() coords: ICoords;
  @Input() type: EAnnotationType;
  @Input() containerBoundaries: {height: number, width: number};
  @Input() annotation: IAnnotation;

  wasDragged: boolean = false;

  @ViewChild('annotationRef') annotationElementRef: ElementRef;
  annotationHtmlElement: HTMLElement;

  isDragging: boolean = false;
  startElPosition: ICoords;
  cursorPosition: ICoords;

  constructor(
    private annotationsService: AnnotationsService
  ) {
  }

  startDragging(event: MouseEvent) {
    if((event.target as Element).tagName !== 'INPUT') {
      this.isDragging = true;
      this.annotationHtmlElement = this.annotationElementRef.nativeElement as HTMLElement;
      this.cursorPosition = { x: event.clientX, y: event.clientY };
      this.startElPosition = { x: this.annotationHtmlElement.offsetLeft, y: this.annotationHtmlElement.offsetTop };
    }
  }

  dragging(event: MouseEvent) {
    const x = event.clientX - this.cursorPosition.x;
    const y = event.clientY - this.cursorPosition.y;
    this.coords = {
      x: (Math.max(0, Math.min(this.startElPosition.x + x, this.containerBoundaries.width - (this.annotationElementRef.nativeElement as HTMLElement).offsetWidth)) * 100)/this.containerBoundaries.width,
      y: (Math.max(0, Math.min(this.startElPosition.y + y, this.containerBoundaries.height - (this.annotationElementRef.nativeElement as HTMLElement).offsetHeight)) * 100)/this.containerBoundaries.height
    };
    this.wasDragged = true;
    this.startElPosition = {x: this.startElPosition.x + x, y: this.startElPosition.y + y};
    this.cursorPosition = {x: event.clientX, y: event.clientY}
  }

  stopDragging() {
    this.isDragging = false;
    if(this.wasDragged)
      this.annotationsService.updateAnnotationCoords(this.annotation.id, this.coords);
    this.wasDragged = false;
  }

  delete() {
    this.annotationsService.delete(this.annotation.id);
  }
}
