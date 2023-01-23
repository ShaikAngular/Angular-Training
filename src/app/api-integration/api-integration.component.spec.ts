import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestService } from '../services/test.service';
import { ApiIntegrationComponent } from './api-integration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ApiIntegrationComponent', () => {
  let component: ApiIntegrationComponent;
  let fixture: ComponentFixture<ApiIntegrationComponent>;

  beforeEach(() => {
    const testServiceStub = () => ({
      getCompanyDetails: () => ({
        subscribe: f => f({}),
        pipe: () => ({ subscribe: f => f({}) })
      }),
      getPersonalDetails: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        
        NgxPaginationModule
     ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ApiIntegrationComponent],
      providers: [{ provide: TestService, useFactory: testServiceStub }]
    });
    fixture = TestBed.createComponent(ApiIntegrationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`page has default value`, () => {
    expect(component.page).toEqual(1);
  });

  it(`count has default value`, () => {
    expect(component.count).toEqual(0);
  });

  it(`tableSize has default value`, () => {
    expect(component.tableSize).toEqual(25);
  });

  it(`tableSizes has default value`, () => {
    expect(component.tableSizes).toEqual([3, 6, 9, 12]);
  });

  it(`salary has default value`, () => {
    expect(component.salary).toEqual(23456);
  });

  it(`filterArr has default value`, () => {
    expect(component.filterArr).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'companyDetails').and.callThrough();
      spyOn(component, 'personDetails').and.callThrough();
      spyOn(component, 'companyDetails1').and.callThrough();
      component.ngOnInit();
      expect(component.companyDetails).toHaveBeenCalled();
      expect(component.personDetails).toHaveBeenCalled();
      expect(component.companyDetails1).toHaveBeenCalled();
    });
  });

  describe('companyDetails', () => {
    it('makes expected calls', () => {
      const testServiceStub: TestService = fixture.debugElement.injector.get(
        TestService
      );
      spyOn(testServiceStub, 'getCompanyDetails').and.callThrough();
      component.companyDetails();
      expect(testServiceStub.getCompanyDetails).toHaveBeenCalled();
    });
  });

  describe('companyDetails1', () => {
    it('makes expected calls', () => {
      const testServiceStub: TestService = fixture.debugElement.injector.get(
        TestService
      );
      spyOn(testServiceStub, 'getCompanyDetails').and.callThrough();
      component.companyDetails1();
      expect(testServiceStub.getCompanyDetails).toHaveBeenCalled();
    });
  });

  describe('personDetails', () => {
    it('makes expected calls', () => {
      const testServiceStub: TestService = fixture.debugElement.injector.get(
        TestService
      );
      spyOn(testServiceStub, 'getPersonalDetails').and.callThrough();
      component.personDetails();
      expect(testServiceStub.getPersonalDetails).toHaveBeenCalled();
    });
  });
});
