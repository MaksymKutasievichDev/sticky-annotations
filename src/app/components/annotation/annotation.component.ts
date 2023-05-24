import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICoords } from "../../models/coords.interface";

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent {

  @Input() coords: ICoords;
  @Input() containerBoundaries: {height: number, width: number};

  @ViewChild('annotation') annotationElementRef: ElementRef;
  annotationHtmlElement: HTMLElement;

  isDragging: boolean = false;
  startElPosition: ICoords;
  cursorPosition: ICoords;

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.annotationHtmlElement = this.annotationElementRef.nativeElement as HTMLElement;
    this.cursorPosition = {x: event.clientX, y: event.clientY};
    this.startElPosition = {x: this.annotationHtmlElement.offsetLeft, y: this.annotationHtmlElement.offsetTop};
  }

  dragging(event: MouseEvent) {
    const x = event.clientX - this.cursorPosition.x;
    const y = event.clientY - this.cursorPosition.y;
    this.coords = {
      x: Math.max(0, Math.min(this.startElPosition.x + x, this.containerBoundaries.width - (this.annotationElementRef.nativeElement as HTMLElement).offsetWidth)),
      y: Math.max(0, Math.min(this.startElPosition.y + y, this.containerBoundaries.height - (this.annotationElementRef.nativeElement as HTMLElement).offsetHeight))
    };
    this.startElPosition = {x: this.startElPosition.x + x, y: this.startElPosition.y + y};
    this.cursorPosition = {x: event.clientX, y: event.clientY}
  }

  stopDragging(event: MouseEvent) {
    this.isDragging = false;
  }
}
