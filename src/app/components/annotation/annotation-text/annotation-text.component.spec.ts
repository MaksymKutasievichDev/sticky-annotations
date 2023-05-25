import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnotationTextComponent } from './annotation-text.component';
import { AnnotationsService } from '../../../services/annotations.service';
import { EAnnotationType, IAnnotation } from '../../../interfaces/annotation.interface';

describe('AnnotationTextComponent', () => {
  let component: AnnotationTextComponent;
  let fixture: ComponentFixture<AnnotationTextComponent>;
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
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [AnnotationTextComponent],
      providers: [
        { provide: AnnotationsService, useValue: annotationsServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationTextComponent);
    component = fixture.componentInstance;
    annotationsServiceMock = TestBed.inject(AnnotationsService) as jasmine.SpyObj<AnnotationsService>;
    component.annotation = annotation;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update the text using the annotation service', () => {
    const updatedText = 'Updated content';
    component.inputField.setValue(updatedText);
    component.updateText();
    expect(annotationsServiceMock.updateAnnotationContent).toHaveBeenCalledWith(annotation.id, updatedText);
  });
});
