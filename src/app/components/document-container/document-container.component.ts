import { Component, ComponentRef, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { map, Observable } from "rxjs";

import { ICoords } from "../../interfaces/coords.interface";
import { DynamicChildLoaderDirective } from "../../directives/dynamic-child-loader.directive";
import { AnnotationSelectComponent } from "../annotation-select/annotation-select.component";
import { IAnnotation } from "../../interfaces/annotation.interface";
import { AnnotationsService } from "../../services/annotations.service";
import { ZoomService } from "../../services/zoom.service";


@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent implements OnInit {

  annotations$: Observable<IAnnotation[]>;
  zoomValue$: Observable<number>;

  @Input() contentImage: string;
  @Input() pageId: number;
  @Input() documentId: number;

  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  @ViewChild('documentContainer')
  documentContainer: ElementRef;

  isAnnotationModalActive: boolean = false;
  annotationSelectRef: ComponentRef<AnnotationSelectComponent>;

  constructor(
    private annotationService: AnnotationsService,
    private zoomService: ZoomService
  ) {
  }

  ngOnInit() {
    this.annotations$ = this.annotationService.annotations$.pipe(
      map(annotations => {
        return annotations.filter(annotation =>
          annotation.pageId === this.pageId && annotation.documentId === this.documentId
        )
      })
    );
    this.zoomValue$ = this.zoomService.zoomValue$;
  }

  private loadDynamicAnnotationSelection(coords: ICoords) {
    this.isAnnotationModalActive = true;
    this.annotationSelectRef = this.dynamicChild.viewContainerRef.createComponent(AnnotationSelectComponent);
    this.annotationSelectRef.setInput('coords', coords);
    this.annotationSelectRef.instance.createAnnotationEmitter.subscribe(annotation => {
      this.destroyDynamicAnnotation();
      this.annotationService.createAnnotation(annotation, this.pageId, this.documentId)
    });
  }
  public destroyDynamicAnnotation() {
    this.isAnnotationModalActive = false;
    this.annotationSelectRef.instance.createAnnotationEmitter.unsubscribe();
    this.annotationSelectRef.destroy();
  }

  public documentClick(event: MouseEvent) {
    const target = event.target as Element;
    if(target.classList.contains('document_container')) {
      const coords: ICoords = {
        x: (event.offsetX * 100)/(this.documentContainer.nativeElement as HTMLElement).offsetWidth,
        y: (event.offsetY * 100)/(this.documentContainer.nativeElement as HTMLElement).offsetHeight
      };
      if(!this.isAnnotationModalActive){
        this.loadDynamicAnnotationSelection(coords);
      } else {
        this.destroyDynamicAnnotation();
      }
    }
  }
}
