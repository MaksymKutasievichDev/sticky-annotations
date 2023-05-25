import { TestBed } from '@angular/core/testing';
import { ServerDataService } from './server-data.service';
import { IDocument } from '../interfaces/document.interface';

describe('ServerDataService', () => {
  let service: ServerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of documents when getDocuments is called', () => {
    const documents: IDocument[] = service.getDocuments();
    expect(Array.isArray(documents)).toBeTrue();
    expect(documents.length).toBeGreaterThan(0);
  });

  it('should return a document with the specified ID when getDocumentById is called', () => {
    const documents: IDocument[] = service.getDocuments();
    const documentId = 1;
    const document: IDocument = service.getDocumentById(documentId);
    expect(document).toBeTruthy();
    expect(document.id).toBe(documentId);
    expect(documents).toContain(document);
  });

  it('should return undefined when getDocumentById is called with a non-existing ID', () => {
    const documentId = 9999;
    const document: IDocument = service.getDocumentById(documentId);
    expect(document).toBeUndefined();
  });
});
