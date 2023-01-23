import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestService } from '../services/test.service';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    const testServiceStub = () => ({ add: (arg, arg1) => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AboutComponent],
      providers: [{ provide: TestService, useFactory: testServiceStub }]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
