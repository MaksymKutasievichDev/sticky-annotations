import { ICoords } from "./coords.interface";

export interface IAnnotation {
  id: number;
  type: EAnnotationType;
  content: string;
  pageId: number;
  documentId: number;
  position: ICoords;
  opacity?: number;
}

export type IAnnotationCreation = Omit<IAnnotation, 'id' | 'documentId' | 'pageId' | 'content'>

export enum EAnnotationType {
  TEXT = 'text',
  IMAGE = 'image'
}
