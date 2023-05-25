import { EAnnotationType } from "../interfaces/annotation.interface";

export interface IAnnotationsOptions {
  type: EAnnotationType;
  icon: string;
}

export const ANNOTATIONS_OPTIONS: IAnnotationsOptions[] = [
  {
    type: EAnnotationType.TEXT,
    icon: 'text-ico.png'
  },
  {
    type: EAnnotationType.IMAGE,
    icon: 'picture-ico.png'
  }
]
