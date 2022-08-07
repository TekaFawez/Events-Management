// Fawez TEKA
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.

import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appBorderCader]'
})
export class BorderCaderDirective {

  constructor(private el :ElementRef) {
    this.setColor('#63abda')
    this.setHieght(10)
    this.setBorder('#63abda')
   }
   @HostListener ('mouseenter') onMouseEnter(){
    this.setBorder('#63abda')
   }


   @HostListener("mouseleave") onMouseLeave(){
    this.setBorder('#f5f5f5')

   }
   setColor(color : string){
    this.el.nativeElement.style.color=`${color}`
   }
  setHieght(height : number){
//nativeEl accede a l'emelemnt native de DOM
    this.el.nativeElement.style.height=`${height}px`
  }
  setBorder(color:string){
    this.el.nativeElement.style.border=`solid 4x ${color}`
  }

}
