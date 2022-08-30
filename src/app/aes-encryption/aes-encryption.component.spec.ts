import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AESEncryptionComponent } from './aes-encryption.component';

describe('AESEncryptionComponent', () => {
  let component: AESEncryptionComponent;
  let fixture: ComponentFixture<AESEncryptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AESEncryptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AESEncryptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
