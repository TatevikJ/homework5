const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const rand = function(num) {
        return Math.floor(Math.random() * num) + 1;
      
    };
    canvas.width = 400;
    canvas.height = 400;

    const createBoxes = function(count, canvasWidth, canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
        let array=[];
        const colorArray = ["grey", "violet", "pink"];
        const width = 50;
        const height = 50;

        for (let i = 0; i< count; i+=1) {
            let object = {
                width: 50,
                height: 50,
                x: rand(canvasWidth - width),
                y: rand(canvasHeight - height),
                xDelta: 5,
                yDelta: 5,
                color: colorArray[rand(colorArray.length)-1],
                draw: function () {
                    context.fillStyle = this.color;
                    context.fillRect(this.x,this.y,this.width,this.height);
                },

                update: function () {
                    this.x += this.xDelta;
                    this.y += this.yDelta;

                    if(this.x >= canvasWidth - width || this.x <= 0) {
                        this.color = colorArray[rand(colorArray.length) - 1] ;
                        this.xDelta *= -1;
                    }
                    if(this.y >= canvasHeight - height || this.y <= 0) {
                        this.color = colorArray[rand(colorArray.length) - 1] ;
                        this.yDelta *= -1;
                    }
                }
                    
            }

            array[i]= object
        }
        return array
    };


    let arr1 = createBoxes(20, 800, 600);
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

    const animate = function() {
        requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height)
        draw();
        update();
    };

    animate()