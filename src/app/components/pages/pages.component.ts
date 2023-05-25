import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { first } from "rxjs";

import { ServerDataService } from "../../services/server-data.service";
import { IDocument } from "../../interfaces/document.interface";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  document: IDocument;
  constructor(
    private serverDataService: ServerDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(params => {
      this.document = this.serverDataService.getDocumentById(parseInt(params['id']));
    })
  }

}
