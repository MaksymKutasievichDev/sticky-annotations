import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { first, Subscription } from "rxjs";

import { ServerDataService } from "../../services/server-data.service";
import { IDocument } from "../../models/document.interface";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  private routeSub: Subscription;
  document: IDocument;
  constructor(
    private serverDataService: ServerDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.pipe(first()).subscribe(params => {
      this.document = this.serverDataService.getDocumentById(parseInt(params['id']));
    })
  }

}
