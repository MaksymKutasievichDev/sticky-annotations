import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  private _zoomValue = new BehaviorSubject<number>(60);
  readonly zoomValue$ = this._zoomValue.asObservable();

  private zoomValue: number = 60;
  private minZoomValue: number = 20;
  private maxZoomValue = 100;

  addZoom() {
    if(this.zoomValue < this.maxZoomValue) {
      this.zoomValue += 10;
      this._zoomValue.next(this.zoomValue);
    }
  }

  minusZoom() {
    if(this.zoomValue > this.minZoomValue) {
      this.zoomValue -= 10;
      this._zoomValue.next(this.zoomValue);
    }
  }
}
