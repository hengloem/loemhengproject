import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PramPramChatComponent } from './pram-pram-chat.component';

describe('PramPramChatComponent', () => {
  let component: PramPramChatComponent;
  let fixture: ComponentFixture<PramPramChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PramPramChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PramPramChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
