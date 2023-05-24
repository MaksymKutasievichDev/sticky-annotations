import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationSelectComponent } from './annotation-select.component';

describe('AnnotationComponent', () => {
  let component: AnnotationSelectComponent;
  let fixture: ComponentFixture<AnnotationSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
