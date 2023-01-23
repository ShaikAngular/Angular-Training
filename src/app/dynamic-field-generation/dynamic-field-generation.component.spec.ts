import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DynamicFieldGenerationComponent } from './dynamic-field-generation.component';

describe('DynamicFieldGenerationComponent', () => {
  let component: DynamicFieldGenerationComponent;
  let fixture: ComponentFixture<DynamicFieldGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DynamicFieldGenerationComponent]
    });
    fixture = TestBed.createComponent(DynamicFieldGenerationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
