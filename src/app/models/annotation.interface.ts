import { ICoords } from "./coords.interface";

export interface IAnnotation {
  type: EAnnotationType;
  position: ICoords
}

export enum EAnnotationType {
  TEXT = 'text',
  IMAGE = 'image'
}
