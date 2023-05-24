import { Component, Input, OnInit } from '@angular/core';
import { ICoords } from "../../models/coords.interface";

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit {

  @Input() coords: ICoords;
  constructor() { }

  ngOnInit(): void {
  }

}
