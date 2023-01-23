import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestService } from './test.service';
import {Company} from '../utils/company'

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });
    service = TestBed.inject(TestService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getCompanyDetails', () => {
    it('makes expected calls', () => {
      const data1 : Company = {
        name:   '',
        gender:  '' ,
        company: '',
        age:   ''
    };
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getCompanyDetails().subscribe(res => {
        expect(res).toEqual(data1);
      });
      const req = httpTestingController.expectOne('/assets/company.json');
      expect(req.request.method).toEqual('GET');
      req.flush(data1);
      httpTestingController.verify();
    });
  });

  describe('getPersonalDetails', () => {
    it('makes expected calls', () => {
      const data = {}
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getPersonalDetails().subscribe(res => {
        expect(res).toEqual(data);
      });
      const req = httpTestingController.expectOne('/assets/100k.json');
      expect(req.request.method).toEqual('GET');
      req.flush(data);
      httpTestingController.verify();
    });
  });
});
