import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { first, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  a: number[] = [1, 2, 3, 4, 5];
  a$;

  demo$ = of(2, 3, 4, 5, 6);
  constructor() { }

  ngOnInit(): void {
   
    this.a$ = of(this.a)
   
    const x: any = this.a$.pipe(
      tap(res=>console.log(res)),
      map((num: any) => num.map(a => a * a))
    ).subscribe(
      r => console.log(r)
    )
	



  }

}
