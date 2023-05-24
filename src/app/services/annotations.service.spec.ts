import { TestBed } from '@angular/core/testing';
import { AnnotationsService } from './annotations.service';
import { EAnnotationType, IAnnotation, IAnnotationCreation } from '../models/annotation.interface';
import { ICoords } from '../models/coords.interface';

describe('AnnotationsService', () => {
  let service: AnnotationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an initial empty annotations array', () => {
    service.annotations$.subscribe(annotations => {
      expect(annotations).toEqual([]);
    });
  });

  it('should update the annotations array when getAnnotations is called', () => {
    const annotations: IAnnotation[] = [
      { id: 1, content: 'Annotation 1', pageId: 1, documentId: 1, position: {x: 0, y: 0}, type: EAnnotationType.TEXT },
      { id: 2, content: 'Annotation 2', pageId: 1, documentId: 1, position: {x: 0, y: 0}, type: EAnnotationType.TEXT },
    ];
    service['annotations'] = annotations;
    service.getAnnotations();
    service.annotations$.subscribe(updatedAnnotations => {
      expect(updatedAnnotations).toEqual(annotations);
    });
  });

  it('should create a new annotation with a unique ID when createAnnotation is called', () => {
    const annotation: IAnnotationCreation = {
      type: EAnnotationType.TEXT,
      position: { x: 0, y: 0 },
    };
    const pageId = 1;
    const documentId = 1;
    service.createAnnotation(annotation, pageId, documentId);
    service.createAnnotation(annotation, pageId, documentId);
    service.annotations$.subscribe(annotations => {
      expect(annotations.length).toBe(2);
      expect(annotations[0].id).toEqual(0);
      expect(annotations[1].id).toEqual(1);
      expect(annotations[0].content).toBe('');
      expect(annotations[0].pageId).toBe(pageId);
      expect(annotations[0].documentId).toBe(documentId);
    });
  });

  it('should delete the annotation with the specified ID when delete is called', () => {
    service['annotations'] = [
      {
        id: 1,
        content: 'Annotation 1',
        pageId: 1,
        documentId: 1,
        position: { x: 0, y: 0 },
        type: EAnnotationType.TEXT
      },
      {
        id: 2,
        content: 'Annotation 2',
        pageId: 1,
        documentId: 1,
        position: { x: 0, y: 0 },
        type: EAnnotationType.TEXT
      },
    ];
    const idToDelete = 2;
    service.delete(idToDelete);
    service.annotations$.subscribe(updatedAnnotations => {
      expect(updatedAnnotations.length).toBe(1);
      expect(updatedAnnotations.find(annotation => annotation.id === idToDelete)).toBeFalsy();
    });
  });

  it('should update the content of the annotation with the specified ID when updateAnnotationContent is called', () => {
    service['annotations'] = [
      {
        id: 1,
        content: 'Annotation 1',
        pageId: 1,
        documentId: 1,
        position: { x: 0, y: 0 },
        type: EAnnotationType.TEXT
      },
      {
        id: 2,
        content: 'Annotation 2',
        pageId: 1,
        documentId: 1,
        position: { x: 0, y: 0 },
        type: EAnnotationType.TEXT
      },
    ];
    const idToUpdate = 2;
    const newContent = 'Updated content';
    service.updateAnnotationContent(idToUpdate, newContent);
    service.annotations$.subscribe(updatedAnnotations => {
      const updatedAnnotation = updatedAnnotations.find(annotation => annotation.id === idToUpdate);
      expect(updatedAnnotation).toBeTruthy();
      expect(updatedAnnotation!.content).toBe(newContent);
    });
  });

  it('should update the position coordinates of the annotation with the specified ID when updateAnnotationCoords is called', () => {
    service['annotations'] = [
      {
        id: 1,
        content: 'Annotation 1',
        pageId: 1,
        documentId: 1,
        position: { x: 0, y: 0 },
        type: EAnnotationType.TEXT
      },
      {
        id: 2,
        content: 'Annotation 2',
        pageId: 1,
        documentId: 1,
        position: { x: 0, y: 0 },
        type: EAnnotationType.TEXT
      },
    ];
    const idToUpdate = 2;
    const newCoords: ICoords = { x: 50, y: 60 };
    service.updateAnnotationCoords(idToUpdate, newCoords);
    service.annotations$.subscribe(updatedAnnotations => {
      const updatedAnnotation = updatedAnnotations.find(annotation => annotation.id === idToUpdate);
      expect(updatedAnnotation).toBeTruthy();
      expect(updatedAnnotation!.position).toEqual(newCoords);
    });
  });

  it('should log the annotations array when save is called', () => {
    const consoleSpy = spyOn(console, 'log');
    const annotations: IAnnotation[] = [
      { id: 1, content: 'Annotation 1', pageId: 1, documentId: 1, position: {x: 0, y: 0}, type: EAnnotationType.TEXT },
      { id: 2, content: 'Annotation 2', pageId: 1, documentId: 1, position: {x: 0, y: 0}, type: EAnnotationType.TEXT },
    ];
    service['annotations'] = annotations;
    service.save();
    expect(consoleSpy).toHaveBeenCalledWith(annotations);
  });
});
