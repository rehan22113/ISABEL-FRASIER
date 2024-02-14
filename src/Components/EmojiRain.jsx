import React, { useEffect } from 'react';

const EmojiRain = ({children}) => {
  // useEffect(() => {
  //   const container = document.getElementById('animate');
  //   const emoji = ["🎀","🧸","🔮","🍦","🙂","💝","💫"];
  //   const circles = [];

  //   const addCircle = (delay, range, color) => {
  //     setTimeout(() => {
  //       const c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
  //         x: -0.15 + Math.random() * 0.3,
  //         y: 1 + Math.random() * 1
  //       }, range);
  //       circles.push(c);
  //     }, delay);
  //   };

  //   class Circle {
  //     constructor(x, y, c, v, range) {
  //       this.x = x;
  //       this.y = y;
  //       this.color = c;
  //       this.v = v;
  //       this.range = range;
  //       this.element = document.createElement('span');
  //       this.element.style.opacity = 0;
  //       this.element.style.position = 'absolute';
  //       this.element.style.fontSize = '26px';
  //       this.element.style.color = 'hsl(' + (Math.random() * 360 | 0) + ',80%,50%)';
  //       this.element.innerHTML = c;
  //       container.appendChild(this.element);

  //       // this.update = () => {
  //       //   if (this.y > 800) {
  //       //     this.y = 80 + Math.random() * 4;
  //       //     this.x = this.range[0] + Math.random() * this.range[1];
  //       //   }
  //       //   this.y += this.v.y;
  //       //   this.x += this.v.x;
  //       //   this.element.style.opacity = 1;
  //       //   this.element.style.transform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
  //       //   this.element.style.webkitTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
  //       //   this.element.style.mozTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
  //       // };
  //     // }
  //       this.update = () => {
  //         if (this.y > window.innerHeight) {
  //           setTimeout(() => {
  //             this.y = 80 + Math.random() * 4;
  //             this.x = this.range[0] + Math.random() * this.range[1];
  //           }, 2000); // Delay before resetting position (1 second)
  //         }
  //         this.y += this.v.y;
  //         this.x += this.v.x;
  //         this.element.style.opacity = 1;
  //         this.element.style.transform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
  //         this.element.style.webkitTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
  //         this.element.style.mozTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
  //       };
  //     }
      
  //   }
  //   for (let i = 0; i < 2; i++) { // Reduce the number of emojis to 5
  //     addCircle(i * 150, [10 + 200, 0], emoji[Math.floor(Math.random() * emoji.length)]);
  //       addCircle(i * 350, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  //     addCircle(i * 350, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  //     addCircle(i * 350, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  //     addCircle(i * 350, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  //     addCircle(i * 350, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  //   }
  //   const animate = () => {
  //     for (const i in circles) {
  //       circles[i].update();
  //     }
  //     requestAnimationFrame(animate);
  //   };

  //   animate();

  // }, []);
  useEffect(() => {
    const container = document.getElementById('animate');
    const emoji = ["🎀", "🧸", "🔮", "🍦", "🙂", "💝", "💫"];
    const circles = [];
  
    const addCircle = (delay, range, color, lifespan) => {
      setTimeout(() => {
        const c = new Circle(
          range[0] + Math.random() * range[1],
          80 + Math.random() * 4,
          color,
          {
            x: -0.15 + Math.random() * 0.3,
            y: 1 + Math.random() * 1
          },
          range,
          lifespan
        );
        circles.push(c);
      }, delay);
    };
  
    class Circle {
      constructor(x, y, c, v, range, lifespan) {
        this.x = x;
        this.y = y;
        this.color = c;
        this.v = v;
        this.range = range;
        this.lifespan = lifespan;
        this.element = document.createElement('span');
        this.element.style.opacity = 0;
        this.element.style.position = 'absolute';
        this.element.style.fontSize = '26px';
        this.element.style.color = 'hsl(' + (Math.random() * 360 | 0) + ',80%,50%)';
        this.element.innerHTML = c;
        container.appendChild(this.element);
  
        this.update = () => {
          if (this.y > window.innerHeight) {
            this.y = 80 + Math.random() * 4;
            this.x = this.range[0] + Math.random() * this.range[1];
            this.lifespan -= 1;
            if (this.lifespan <= 0) {
              container.removeChild(this.element);
              circles.splice(circles.indexOf(this), 1);
            }
          }
          this.y += this.v.y;
          this.x += this.v.x;
          this.element.style.opacity = 1;
          this.element.style.transform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
          this.element.style.webkitTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
          this.element.style.mozTransform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
        };
      }
    }
  
    for (let i = 0; i < 2; i++) {
      // Reduce the number of emojis to 5
      addCircle(i * 1500, [10 + 200, 0], emoji[Math.floor(Math.random() * emoji.length)], 60);
      addCircle(i * 3500, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)], 60);
      addCircle(i * 3500, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)], 60);
      addCircle(i * 3500, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)], 60);
      addCircle(i * 3500, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)], 60);
      addCircle(i * 3500, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)], 60);
    }
  
    const animate = () => {
      for (const i in circles) {
        circles[i].update();
      }
      requestAnimationFrame(animate);
    };
  
    animate();
  
  }, []);
  
 

  return (
    <div>
      <div id="all" className="overflow-hidden h-screen fixed w-full">
        <div id="container" className="left-0 top-[-100px] h-[calc(100vh+100px)] overflow-hidden relative">
          <div id="animate" className="mx-auto w-20 overflow-visible relative"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default EmojiRain;
