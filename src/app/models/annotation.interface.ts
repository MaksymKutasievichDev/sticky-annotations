import { ICoords } from "./coords.interface";

export interface IAnnotation {
  type: EAnnotationType;
  content: string;
  page: number;
  position: ICoords;
}

export enum EAnnotationType {
  TEXT = 'text',
  IMAGE = 'image'
}
