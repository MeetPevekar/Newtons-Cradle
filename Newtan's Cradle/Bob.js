class Bob {

    constructor(x,y,r){

        var option={

            isStatic:false,
			restitution:1,
			friction:0,
            density:0.5

        }

    this.x = x;
    this.y = y;
    this.r = r

    this.body = Bodies.circle(this.x,this.y,(this.r)/2,option)
    World.add(world, this.body);

    }

    display(){

        var paperpos = this.body.position;
        Push()
        translate(paperpos.x, paperpos,y);
        rectMode(CENTER)
        //strokeWeight(4)
        Fill(255,0,255)
        //imageMode(CENTER);
	    //image(this.image, 0,0,this.r, this.r)
		ellipse(0,0,this.r, this.r);
		pop()

    }

}