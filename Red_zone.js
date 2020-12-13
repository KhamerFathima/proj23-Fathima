class box{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
       
    }


    display(){    
   push() ;    
    var pos = this.body.position;
    translate(pos.x , pos.y);
    rectMode(CENTER);
    fill("red"); 
    rect(0,0,this.width,this.height);
   pop();     
    }
    }

