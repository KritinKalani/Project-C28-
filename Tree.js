class Tree{
    constructor(){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(600,250,100,100,options);
        this.width = 350;
        this.height = 350;
        this.image = loadImage("tree.png")
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}