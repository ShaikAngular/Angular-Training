import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestService } from '../services/test.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const testServiceStub = () => ({
      add: (firstNumber, secondNumber) => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: TestService, useFactory: testServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('total', () => {
    it('makes expected calls', () => {
      const testServiceStub: TestService = fixture.debugElement.injector.get(
        TestService
      );
      spyOn(testServiceStub, 'add').and.callThrough();
      component.total();
     // expect(testServiceStub.add).toHaveBeenCalled();
    });
  });
});
