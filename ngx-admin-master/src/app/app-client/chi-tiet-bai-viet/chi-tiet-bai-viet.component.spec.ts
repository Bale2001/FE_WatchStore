import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietBaiVietComponent } from './chi-tiet-bai-viet.component';

describe('ChiTietBaiVietComponent', () => {
  let component: ChiTietBaiVietComponent;
  let fixture: ComponentFixture<ChiTietBaiVietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietBaiVietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiTietBaiVietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
