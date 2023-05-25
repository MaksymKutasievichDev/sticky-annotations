import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ServerDataService } from '../../services/server-data.service';
import { IDocument } from '../../interfaces/document.interface';
import { of } from 'rxjs';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  let serverDataServiceMock: jasmine.SpyObj<ServerDataService>;
  let activatedRouteMock: Partial<ActivatedRoute>;

  const document: IDocument = {
    id: 1,
    name: 'Document 1',
    pages: []
  };

  beforeEach(async () => {
    const serverDataServiceSpy = jasmine.createSpyObj('ServerDataService', ['getDocumentById']);
    const activatedRouteStub: Partial<ActivatedRoute> = {
      params: of({ id: '1' })
    };

    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      providers: [
        { provide: ServerDataService, useValue: serverDataServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    serverDataServiceMock = TestBed.inject(ServerDataService) as jasmine.SpyObj<ServerDataService>;
    activatedRouteMock = TestBed.inject(ActivatedRoute);

    serverDataServiceMock.getDocumentById.and.returnValue(document);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the document by id and set it correctly', () => {
    expect(serverDataServiceMock.getDocumentById).toHaveBeenCalledWith(1);
    expect(component.document).toEqual(document);
  });
});
