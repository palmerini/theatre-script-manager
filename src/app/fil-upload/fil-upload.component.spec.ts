import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilUploadComponent } from './fil-upload.component';

describe('FilUploadComponent', () => {
  let component: FilUploadComponent;
  let fixture: ComponentFixture<FilUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
