import { Component, OnInit } from '@angular/core';
import { ServerDataService } from "../../services/server-data.service";
import { IDocument } from "../../models/document.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  documents: IDocument[];

  constructor(
    private serverDataService: ServerDataService
  ) {
    this.documents = this.serverDataService.getDocuments();
  }

  ngOnInit(): void {
  }

}
