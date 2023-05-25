import { Injectable } from "@angular/core";
import { IAnnotation, IAnnotationCreation } from "../interfaces/annotation.interface";
import { BehaviorSubject } from "rxjs";
import { ICoords } from "../interfaces/coords.interface";

@Injectable({
  providedIn: 'root'
})
export class AnnotationsService {

  private _annotations = new BehaviorSubject<IAnnotation[]>([]);
  readonly annotations$ = this._annotations.asObservable();

  private annotations: IAnnotation[] = [];

  getAnnotations() {
    this._annotations.next(this.annotations);
  }

  createAnnotation(annotation: IAnnotationCreation, pageId: number, documentId: number) {
    let newAnnotation: IAnnotation = {
      ...annotation,
      id: 0,
      content: '',
      pageId,
      documentId
    }
    if(this.annotations.length){
      const maxId = Math.max(...this.annotations.map(o => o.id));
      newAnnotation = {
        ...newAnnotation,
        id: maxId + 1
      }
    }
    this.annotations.push(newAnnotation);
    this._annotations.next(Object.assign([], this.annotations));
  }

  delete(id: number) {
    this.annotations.forEach((annotation, index) => {
      if (annotation.id === id) {
        this.annotations.splice(index, 1);
      }
      this._annotations.next(Object.assign([], this.annotations));
    });
  }

  updateAnnotationContent(id: number, content: string) {
    this.annotations = [...this.annotations.map(annotation => {
      if(annotation.id != id) {
        return annotation
      } else {
        return {
          ...annotation,
          content
        }
      }
    })];
    this._annotations.next(Object.assign([], this.annotations));
  }

  updateAnnotationCoords(id: number, coords: ICoords) {
    this.annotations = [...this.annotations.map(annotation => {
      if(annotation.id != id) {
        return annotation
      } else {
        return {
          ...annotation,
          position: coords
        }
      }
    })];
    this._annotations.next(Object.assign([], this.annotations));
  }

  save() {
    console.log(this.annotations);
  }
}
