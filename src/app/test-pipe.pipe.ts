import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
  pure:true
})
export class TestPipePipe implements PipeTransform {

  transform(value: string, gender:string, age:number): string {
     if(gender=='male')
           return "Mr." + value;
     else
     
      return "Miss." + value;
    
   
  }

}
