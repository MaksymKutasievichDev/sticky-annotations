import { Component, OnInit } from '@angular/core';
import { AnnotationsService } from "../../services/annotations.service";
import { Observable } from "rxjs";
import { ZoomService } from "../../services/zoom.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  zoomValue$: Observable<number>;

  constructor(
    private annotationService: AnnotationsService,
    private zoomService: ZoomService
  ) { }

  ngOnInit() {
    this.zoomValue$ = this.zoomService.zoomValue$;
  }

  saveAnnotations() {
    this.annotationService.save();
  }

  addZoom() {
    this.zoomService.addZoom();
  }

  decraseZoom() {
    this.zoomService.minusZoom();
  }
}
