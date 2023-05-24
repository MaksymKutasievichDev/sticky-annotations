import { TestBed } from '@angular/core/testing';
import { ZoomService } from './zoom.service';

describe('ZoomService', () => {
  let service: ZoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an initial zoom value of 60', () => {
    service.zoomValue$.subscribe(value => {
      expect(value).toBe(60);
    });
  });

  it('should increase zoom value by 10 when addZoom is called', () => {
    service.addZoom();
    service.zoomValue$.subscribe(value => {
      expect(value).toBe(70);
    });
  });

  it('should not increase zoom value beyond maxZoomValue', () => {
    const maxZoomValue = service['maxZoomValue'];
    const increaseCount = Math.floor((maxZoomValue - (service as any).zoomValue) / 10);
    for (let i = 0; i < increaseCount; i++) {
      service.addZoom();
    }
    service.addZoom(); // Try to increase beyond maxZoomValue
    service.zoomValue$.subscribe(value => {
      expect(value).toBe(maxZoomValue);
    });
  });

  it('should decrease zoom value by 10 when minusZoom is called', () => {
    service.minusZoom();
    service.zoomValue$.subscribe(value => {
      expect(value).toBe(50);
    });
  });

  it('should not decrease zoom value below minZoomValue', () => {
    const minZoomValue = service['minZoomValue'];
    const decreaseCount = Math.floor(((service as any).zoomValue - minZoomValue) / 10);
    for (let i = 0; i < decreaseCount; i++) {
      service.minusZoom();
    }
    service.minusZoom(); // Try to decrease below minZoomValue
    service.zoomValue$.subscribe(value => {
      expect(value).toBe(minZoomValue);
    });
  });
});
