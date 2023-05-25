import { Injectable } from "@angular/core";
import JSONData from '../../server/data.json';
import { IDocument } from "../interfaces/document.interface";

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  getDocuments(): IDocument[] {
    return JSONData;
  }

  getDocumentById(id: number): IDocument {
    return JSONData.find(document => document.id === id)!;
  }
}
