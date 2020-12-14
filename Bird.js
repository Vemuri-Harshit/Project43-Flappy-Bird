class Bird{

constructor(){

this.x = 30;    
this.y = height/2;

this.gravity = 0.5;
this.uplift = -15;
this.velocity = 0;

}

show(){

fill(255)
ellipse(this.x,this.y,32,32);


}

fall(){

this.velocity+=this.gravity;
this.y+=this.velocity;


if(this.y>height  ){

    this.velocity = 0;
    this.y = height;
    
    }
    if(this.y<0){
    
        this.velocity = 0;
        this.y = 0;
        
    }



}

lift(){

this.velocity+= this.uplift;
  
}









}