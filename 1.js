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
                xDelta: 0,
                yDelta: 0,
                color: colorArray[rand(colorArray.length)-1],
                draw: function () {
                    context.fillStyle = this.color;
                    context.fillRect(this.x,this.y,this.width,this.height);
                },

                update: function () {
                    this.x+= this.xDelta;
                    this.y += this.yDelta;
                     
                }
            };

            array[i]= object
        }
        return array
    };


    let arr1 = createBoxes(20, 800, 800);
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

    draw()