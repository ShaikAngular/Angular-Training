import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { filter, first, map, tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  a$;

  filtResult: any;

  demo$ = of(2, 3, 4, 5, 6);
  mapArray = [];
  filterArr = [];
  debouncer = [];
  constructor() { }

  ngOnInit(): void {
    this.debounceTimer();

    this.a$ = from(this.a) //better use from operator while working with arrays as from checks every element



    //  const y = this.a$.pipe (
    //     //tap(res=>console.log(res)),
    //     filter((num:any) => num%2===0)
    //     //filter((num:any) => this.even(num))
    //   )



  }

  rxjsMap() {
    //map operator
    const x: any = this.a$.pipe(
      tap(res => console.log(res)),
      map((a: any) => a * a)
    ).subscribe(
      r => {
        console.log(r)
        this.mapArray = [...this.mapArray, r];
      }
    )
    console.log('map array', this.mapArray)
  }

  rxjsFilter() {
    this.filtResult = this.a$.pipe(
      //tap(res=>console.log(res)),
      filter((num: any) => num % 2 === 0)
      //filter((num:any) => this.even(num))
    ).subscribe(val => {
      this.filterArr = [...this.filterArr, val]
      console.log(`Even number: ${val}`)

    });
    console.log('arr', this.filterArr)
  }

  debounceTimer() {
    // elem ref
    const searchBox = document.getElementById('search');

    // streams
    const keyup$ = fromEvent(searchBox, 'keyup');

    // wait .5s between keyups to emit current value
    keyup$.pipe(
      map((i: any) => i.currentTarget.value),
      debounceTime(500)
    )
      .subscribe(res=>{
        console.log('debounce example-->', res);
        this.debouncer = [...this.debouncer,res];
      });
  }

  even(num) {
    return num % 2 === 0;
  }

}
