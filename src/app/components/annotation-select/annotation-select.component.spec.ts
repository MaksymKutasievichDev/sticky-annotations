import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnotationSelectComponent } from './annotation-select.component';
import { ICoords } from '../../interfaces/coords.interface';
import { EAnnotationType, IAnnotationCreation } from '../../interfaces/annotation.interface';

describe('AnnotationSelectComponent', () => {
  let component: AnnotationSelectComponent;
  let fixture: ComponentFixture<AnnotationSelectComponent>;

  const coords: ICoords = {
    x: 10,
    y: 20
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnotationSelectComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationSelectComponent);
    component = fixture.componentInstance;
    component.coords = coords;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a create annotation event with the correct type and position', () => {
    const createAnnotationEmitterSpy = spyOn(component.createAnnotationEmitter, 'emit');

    const annotationType = EAnnotationType.TEXT;
    component.createAnnotation(annotationType);

    const expectedAnnotation: IAnnotationCreation = {
      type: annotationType,
      position: coords
    };

    expect(createAnnotationEmitterSpy).toHaveBeenCalledWith(expectedAnnotation);
  });
});
