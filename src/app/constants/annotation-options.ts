import { EAnnotationType } from "../models/annotation.interface";

export interface IAnnotationsOptions {
  type: EAnnotationType;
  icon: string;
}

export const annotationOptionsConst: IAnnotationsOptions[] = [
  {
    type: EAnnotationType.TEXT,
    icon: 'text-ico.png'
  },
  {
    type: EAnnotationType.IMAGE,
    icon: 'picture-ico.png'
  }
]
