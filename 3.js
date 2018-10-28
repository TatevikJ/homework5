const canvas = document.getElementById('canvas');
        const context = canvas.getContext("2d");
      
        canvas.width=800;
        canvas.height=600;
        
        let gameStatus = true;
        const backgroundImage = new Image();
        backgroundImage.src = "https://yese69.com/wp-content/uploads/data/2017/12/14/mario-background-1920x1080-mac-WTG200420230.jpg";
      
        const rand = function(num) {
            return Math.floor(Math.random() * num) + 1;
        };
        
        const goodguyImage = new Image();
        goodguyImage.src = "https://supermariorun.com/assets/img/stage/mario03.png";
      
        const badguysImage = new Image();
        badguysImage.src = "https://vignette.wikia.nocookie.net/nintendo/images/e/e4/MK8D_-_Boo_artwork.png/revision/latest?cb=20170113123150&path-prefix=en";
        
     const createBoxes = function(count, canvasWidth, canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
        let array=[];
        const width = 50;
       const height = 50;

        for (let i = 0; i< count; i+=1) {
            let object = {
                width: 50,
                height: 50,
                x: rand(canvasWidth - width),
                y: rand(canvasHeight - height),
                xDelta: 3,
                yDelta: 3,
              image: badguysImage,
                draw: function () {
                    context.drawImage(this.image, this.x, this.y, this.width, this.height);
                    
                },

                update: function () {
                   if(gameData.hero.x < this.x + this.width  && gameData.hero.x + gameData.hero.width  > this.x &&
                        gameData.hero.y < this.y + this.height && gameData.hero.y + gameData.hero.height > this.y) {
                        gameStatus = false;
                    }
                    this.x += this.xDelta;
                    this.y += this.yDelta;

                    if(this.x >= canvasWidth - width || this.x <= 0) {
                        
                        this.xDelta *= -1;
                    }
                    if(this.y >= canvasHeight - height || this.y <= 0) {
                        
                        this.yDelta *= -1;
                    }
                }
                    
            }

            array[i]= object
        }
        return array
    };


    let arr1 = createBoxes(10, 800, 600);
    const draw=function() {
        for (let i = 1; i < arr1.length; i++) {
            arr1[i].draw();
        }
    };

    const update = function () {
        for(let i = 0; i < arr1.length; i++){

            arr1[i].update();
        }
    };
       
        const gameData = {
          hero: {
            x: 10,
            y: 500,
            width: 80,
            height: 80,
            xDelta: 0,
            yDelta: 0,
            image: goodguyImage,
              draw: function(){
              context.drawImage(this.image, this.x, this.y, this.width, this.height);
              },
              update: function() { 
              this.x += this.xDelta;
              this.y += this.yDelta;
              }
        }
        };
           
   
        
        const leftKey = 37;
        const upKey = 38;
        const rightKey = 39;
        const downKey = 40;
          
          document.addEventListener('keydown', function(event){
         if(event.keyCode === upKey){
          hero.yDelta = -10;
        }else if(event.keyCode === rightKey){
          hero.xDelta = 10;
                }else if(event.keyCode === leftKey){
                 hero.xDelta = -10;
                }else if(event.keyCode === downKey){
                 hero.yDelta = 10;
                }
         
        }, false);
      document.addEventListener('keyup', function(event){
        hero.xDelta = 0;
        hero.yDelta = 0;
        
      }, false);
      
        const hero = gameData.hero;
        const loop = function() {
          if(gameStatus){
          
            context.drawImage(backgroundImage, 0, 0, 800, 600);
            hero.draw();
            hero.update();
            draw();
            update(); 
            
            requestAnimationFrame(loop);
          }else {
            alert('Game over ')
          }
        }
        
        loop( );