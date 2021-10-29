const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block=[], block2 =[];

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(600, 605, 300, 20);
    platform2 = new Ground(900, 405, 300, 20);
    poly = new poly(100,100,20,20);
    Slingshot = new Slingshot(poly.body,{x:200, y:400});
/*
    var x = 445,y=600,k=11;
    var c = x;
    // for platform 1
    for(var j =0;j<5;j++){
        c=c+30;
        x=c;
        k =k-2;
        y = y-35;
    for(var i = 0;i<k; i++){
        block[i+(k+2)*j]= new box(x,y,30,30);
        x= x+30;
    }
    }

     x = 745,y=400,k=11;
     c = x;
    // for platform 2
    for(var j =0;j<5;j++){
        c=c+30;
        x=c;
        k =k-2;
        y = y-35;
    for(var i = 0;i<k; i++){
        block2[i+(k+2)*j]= new box(x,y,30,30);
        x= x+30;
    }
    }
    */
    var x=478,y=604;
    for(var i = 0;i<25;i++){
        if(i==9){
            y=y-30;
            x=510;
            console.log("i="+i)
        }
        if(i==16){
            y=y-30;
            x=550;
            console.log(i)
        }
        if(i==21){
            y=y-30;
            x=570;
            console.log(i)
        }
        if(i==24){
            y=y-30;
            x=600;
            console.log(i)
        }
        block[i] = new box(x,y,30,30);
        x=x+30;
        
    }

    var x2=780,y2=375;
    for(var j = 0;j<25;j++){
        if(j==9){
            y2=y2-30;
            x2=810;
            console.log("j="+j)
        }
        if(j==16){
            y2=y2-30;
            x2=850;
            console.log(j)
        }
        if(j==21){
            y2=y2-30;
            x2=870;
            console.log(j)
        }
        if(j==24){
            y2=y2-30;
            x2=900;
            console.log(j)
        }
        block2[j] = new box(x2,y2,30,30);
        x2=x2+30;
        
    }
}

function draw(){

    background("black");   
    text( mouseX+','+ mouseY,20,20);

    Engine.update(engine);
   ground.display();
   platform1.display();
   platform2.display();
   poly.display();
   /* for platform1
   var k =11;
   for(var j =0;j<5;j++){   
    k =k-2;
   for(var i=0;i<k;i++ ){
    if((i+(k+2)*j)%2==0){
        block[i+(k+2)*j].shapeColor = "BLUE";   // mam this color is not applying and some blocks are missing.
       }
       block[i+(k+2)*j].display();
       
   }
}
// for platform1
var k =11;
for(var j =0;j<5;j++){   
 k =k-2;
for(var i=0;i<k;i++ ){
 if((i+(k+2)*j)%2==0){
     block2[i+(k+2)*j].shapeColor = "BLUE";  
    }
    block2[i+(k+2)*j].display();
    
}
}
*/
for( i=0;i<25;i++){
    block[i].display();
}
for( j=0;j<25;j++){
 block2[j].display();
}
}
function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
    if(keyCode===32)
    Slingshot.attach(poly.body);
}
