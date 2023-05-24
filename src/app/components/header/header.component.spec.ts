import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { HeaderComponent } from './header.component';
import { AnnotationsService } from '../../services/annotations.service';
import { ZoomService } from '../../services/zoom.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let annotationsServiceMock: jasmine.SpyObj<AnnotationsService>;
  let zoomServiceMock: jasmine.SpyObj<ZoomService>;

  beforeEach(async () => {
    const annotationsServiceSpy = jasmine.createSpyObj('AnnotationsService', ['save']);
    const zoomServiceSpy = jasmine.createSpyObj('ZoomService', ['addZoom', 'minusZoom']);
    zoomServiceSpy.zoomValue$ = of(1);

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: AnnotationsService, useValue: annotationsServiceSpy },
        { provide: ZoomService, useValue: zoomServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    annotationsServiceMock = TestBed.inject(AnnotationsService) as jasmine.SpyObj<AnnotationsService>;
    zoomServiceMock = TestBed.inject(ZoomService) as jasmine.SpyObj<ZoomService>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the annotation service save method when saveAnnotations is called', () => {
    component.saveAnnotations();
    expect(annotationsServiceMock.save).toHaveBeenCalled();
  });

  it('should call the zoom service addZoom method when addZoom is called', () => {
    component.addZoom();
    expect(zoomServiceMock.addZoom).toHaveBeenCalled();
  });

  it('should call the zoom service minusZoom method when decraseZoom is called', () => {
    component.decraseZoom();
    expect(zoomServiceMock.minusZoom).toHaveBeenCalled();
  });

  it('should set zoomValue$ correctly from the zoom service', () => {
    expect(component.zoomValue$).toBeTruthy();
    component.zoomValue$.subscribe(value => {
      expect(value).toEqual(1);
    });
  });
});
