import { Component} from '@angular/core';
import { Triangle } from './models/triangle.model';
import { TriangleService } from './triangle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'triangle';
  triangle: Triangle = new Triangle();
  type: string;
  fillError: string;
  maxError: string;
  loading: boolean = false;
  

  constructor(
    private triangleService: TriangleService
  ) { }

  ngOnInit() {
    this.loading = false
    this.fillError = ""
    this.maxError = ""
    
  }

  submitTriangle() {
  this.loading = true
  this.triangleService.calculateTriangle(this.triangle)
  .subscribe(response => {
    this.draw()
    this.type = response.toString()
    this.loading = false;
  })  
}

checkIfTriangle(){
  this.fillError = ""
  this.maxError = ""
  if(this.triangle.x > 0 && this.triangle.y > 0 && this.triangle.z > 0){
    const degrees = this.triangle.x + this.triangle.y + this.triangle.z 
    console.log(degrees)
    if(degrees == 180){
      this.submitTriangle()
    }
    else{
      console.log("HERHENNE")
      this.maxError = 'This is not a valid triangle, please make sure all angles make up 180 degrees'
    }
  }
  else{
    this.fillError = 'You have not filled all the angles of the triangle.'
  }
}

draw(){
  var canvas = <HTMLCanvasElement> document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
  var R1=this.triangle.x*3, R2=this.triangle.y*3, R3=this.triangle.z*3;
  var Ax=0, Ay=0;
  var Bx=R3, By=0;
  var Cx=(R2*R1+R3*R3-R1*R1)/(2*R3);
  var Cy=Math.sqrt(R2*R2-Cx*Cx);

  var Ox = canvas.width / 2 - Bx/2;
  var Oy = canvas.height / 2 + Cy/2;


  ctx?.beginPath();
  ctx?.moveTo(Ox+Ax, Oy-Ay);
  ctx?.lineTo(Ox+Bx, Oy-By);
  ctx?.lineTo(Ox+Cx, Oy-Cy);
  ctx?.closePath();
  ctx?.stroke(); 
  ctx?.fill();
}




numberOnly(event:any): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  else{
  return true;  
  }
  
}

}

