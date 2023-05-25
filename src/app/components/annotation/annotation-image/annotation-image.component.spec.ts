import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnotationImageComponent } from './annotation-image.component';
import { AnnotationsService } from '../../../services/annotations.service';
import { EAnnotationType, IAnnotation } from '../../../interfaces/annotation.interface';

describe('AnnotationImageComponent', () => {
  let component: AnnotationImageComponent;
  let fixture: ComponentFixture<AnnotationImageComponent>;
  let annotationsServiceMock: jasmine.SpyObj<AnnotationsService>;

  const annotation: IAnnotation = {
    id: 1,
    content: 'Initial content',
    type: EAnnotationType.TEXT,
    pageId: 1,
    documentId: 1,
    position: {
      x: 0,
      y: 0
    }
  };

  beforeEach(async () => {
    const annotationsServiceSpy = jasmine.createSpyObj('AnnotationsService', ['updateAnnotationContent']);

    await TestBed.configureTestingModule({
      declarations: [AnnotationImageComponent],
      providers: [
        { provide: AnnotationsService, useValue: annotationsServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationImageComponent);
    component = fixture.componentInstance;
    annotationsServiceMock = TestBed.inject(AnnotationsService) as jasmine.SpyObj<AnnotationsService>;
    component.annotation = annotation;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
