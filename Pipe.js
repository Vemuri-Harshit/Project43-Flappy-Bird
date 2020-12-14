class Pipe{

constructor(){

this.top = random(height/2);
this.bottom = random(height/2);

this.x = width;
this.w = 20;

this.color = false;

}

show(){

fill(255);  

if(this.color){

    //fill(225,0,0);  

}

rect(this.x,0,this.w,this.top);
rect(this.x,height-this.bottom,this.w,this.bottom);

}

move(){

this.x-= 9;



}

offscreen(){

if(this.x < -this.w) {

return true;

}else{

   return false; 
}



}

hit(o){

if(o.y<this.top || o.y>height-this.bottom  ){

 if(o.x>this.x && o.x<this.x+this.w){ 

    this.color = true;
    return true 
 }  
}
this.color = false;
 return false;
}





}
