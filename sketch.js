var  dog1 , dog , happyDog, database , foodS , foodStock ;

function preload()
{
 dog = loadImage("images/dogImg.png");
 happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog1 = createSprite(250,250,5,5);
  dog1.addImage(dog);
  dog1.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  fill("black");
  text("Press UP ARROW Key to feed the dog",150,100);
  text("Food Remaning"+foodS , 180,450);
  if(keyWentDown("UP_ARROW")){
    
    writeStock(foodS);
    dog1.addImage(happyDog);

  }



  drawSprites();
  


}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if (x<=0) {
    x = 0;
  }
  else{
    x = x-1 ;
  }
  database.ref('/').update({
    Food:x

  })

}


