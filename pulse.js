var u;
var p;
var l;
var s;
var e;
var t;
var w;
var i;
var n;
var c;
var i2;
var t2;
var i3;
var e2;
var s2;


function preload() {

	/*letter = loadAnimation("images/u_ext1.svg", "images/u_ext2.svg", "images/u_ext3.svg", "images/u_4.svg");
	still = loadAnimation("images/line1.png");*/
    
    p = loadImage("images/p_ext.svg");
  
    s = loadImage("images/s.svg");

    //extended type
    
    u = loadAnimation("images/u_ext1.svg", "images/u_ext2.svg", "images/u_ext3.svg", "images/u_4.svg");
    
       l = loadAnimation("images/l_1.svg", "images/l_2.svg", "images/l_3.svg", "images/l_4.svg");
    
        e = loadAnimation("images/e_1.svg", "images/e_2.svg", "images/e_3.svg", "images/e_4.svg");
    
    //twitch type
    
     t,w,i,n = loadAnimation("images/t.svg", "images/w.svg", "images/i.svg", "images/n.svg");
    
     c,i2,t2,i3,e2,s2 = loadAnimation("images/c.svg", "images/t.svg", "images/e_5.svg", "images/i.svg", "images/s.svg");

}



function setup() {

    createCanvas(1300,400);

    //pulse
    
    u = createSprite(330, 100, 100, 100);
    
    l = createSprite(670, 100, 100, 100);
    
    e = createSprite(1095, 105, 100, 100);
    
    //twin
    
    t = createSprite(250, 205, 100, 100);
    
    w = createSprite(550, 205, 100, 100);
    
    i = createSprite(950, 205, 100, 100);
    
    n = createSprite(1250, 205, 100, 100);
    
    //cities
    
    c = createSprite(250, 310, 100, 100);
    
    i2 = createSprite(460, 310, 100, 100);
    
    t2 = createSprite(610, 310, 100, 100);
    
    i3 = createSprite(860, 310, 100, 100);
    
    e2 = createSprite(1060, 310, 100, 100);
    
    s2 = createSprite(1260, 310, 100, 100);
    
    //pulse
    
    u.addAnimation("breathing", "images/u_ext1.svg", "images/u_ext2.svg", "images/u_ext3.svg", "images/u_4.svg");
    
    l.addAnimation("breathing", "images/l_1.svg", "images/l_2.svg", "images/l_3.svg", "images/l_4.svg");

    e.addAnimation("breathing", "images/e_1.svg", "images/e_2.svg", "images/e_3.svg", "images/e_4.svg");
    
    //twitch
    
    t.addAnimation("breathing", "images/t.svg", "images/w.svg", "images/i.svg", "images/n.svg", "images/w.svg", "images/t.svg");
    
    w.addAnimation("breathing", "images/w.svg", "images/n.svg", "images/i.svg", "images/t.svg", "images/t.svg", "images/w.svg");
    
     i.addAnimation("breathing", "images/i.svg", "images/t.svg", "images/w.svg", "images/i.svg",  "images/n.svg", "images/i.svg");
    
    n.addAnimation("breathing", "images/n.svg", "images/w.svg", "images/n.svg", "images/t.svg", "images/w.svg", "images/n.svg");
    
    c.addAnimation("breathing", "images/c.svg", "images/t.svg", "images/c.svg", "images/n.svg", "images/s.svg", "images/c.svg");
    
    i2.addAnimation("breathing", "images/i.svg", "images/w.svg", "images/t.svg", "images/e_5.svg", "images/c.svg", "images/i.svg");
    
    t2.addAnimation("breathing", "images/t.svg", "images/w.svg", "images/w.svg", "images/c.svg", "images/w.svg", "images/t.svg");
    
    i3.addAnimation("breathing", "images/i.svg", "images/w.svg", "images/c.svg", "images/w.svg", "images/t.svg", "images/i.svg");
    
    e2.addAnimation("breathing", "images/e_5.svg", "images/c.svg", "images/e_5.svg", "images/e_5.svg", "images/n.svg", "images/e_5.svg");
    
    s2.addAnimation("breathing", "images/s.svg", "images/w.svg", "images/i.svg", "images/n.svg", "images/c.svg", "images/s.svg");
       
}
    
function draw() {

	background(198,156,109); // you need to have a background (image or color) or your animation frames will overlap one another
   /* 
    animation(letter, 100, 100); // the letters on the left side of the page will shuffle on mouse press
    animation(still, 1000, 200); // the letter S will be still on the right side of the page

    if(mouseIsPressed)
    	letter.goToFrame(0);
  	else
    	letter.goToFrame(letter.getLastFrame());
    
    */
    
    image(p, 100,50);
    image(s, 850,60);
    
    //u
    var frame = round(map(mouseX, 0, width, 0, u.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
 u.animation.changeFrame(frame);
    
    //l 
    var frame = round(map(mouseX, 0, width, 0, l.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  l.animation.changeFrame(frame);
    
    //e
        var frame = round(map(mouseX, 0, width, 0, e.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  e.animation.changeFrame(frame);
    
    //t
    var frame = round(map(mouseX, 0, width, 0, t.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  t.animation.changeFrame(frame);
    
    //w
    var frame = round(map(mouseX, 0, width, 0, w.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  w.animation.changeFrame(frame);
    
     //i
    var frame = round(map(mouseX, 0, width, 0, i.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  i.animation.changeFrame(frame);
    
    //n
    var frame = round(map(mouseX, 0, width, 0, n.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  n.animation.changeFrame(frame);
    
    //c
    var frame = round(map(mouseX, 0, width, 0, c.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  c.animation.changeFrame(frame);
    
     //i
    var frame = round(map(mouseX, 0, width, 0, i2.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  i2.animation.changeFrame(frame);
    
     //t
    var frame = round(map(mouseX, 0, width, 0, t2.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  t2.animation.changeFrame(frame);
    
    //i
    var frame = round(map(mouseX, 0, width, 0, i3.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  i3.animation.changeFrame(frame);
    
    //e
    var frame = round(map(mouseX, 0, width, 0, e2.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  e2.animation.changeFrame(frame);
    
    //s
    var frame = round(map(mouseX, 0, width, 0, s2.animation.getLastFrame()));
  //note: frames must be integer numbers so I have to round the result of map
  
  s2.animation.changeFrame(frame);
    
    
    
    
      drawSprites();
    
} 
