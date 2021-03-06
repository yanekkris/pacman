class Pacman {
  constructor(xpos, ypos, mouth, stage) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = mouth;
    this.stage = stage;
  }
  render() {
    const pacElm = document.createElement('div');
    pacElm.className = 'entity entity--pac pacgirl-active-light';
    document.addEventListener('keydown', (event) => {
      this.move(event);
    });

    return pacElm;
  }

  move(event) {
    let keyCode = event.code;
    console.log(Math.floor(this.xpos / 85), Math.floor(this.ypos / 85));
    console.log(
      stage1.collisionDetection(
        Math.floor(this.xpos / 85) + 1,
        Math.floor(this.ypos / 85) + 1
      )
    );
    if (
      stage1.collisionDetection(
        Math.floor(this.xpos / 85),
        Math.floor(this.ypos / 85)
      ) === false
    ) {
      console.log('Boom');
    } else {
      if (keyCode === 'ArrowRight') {
        if (this.xpos < stageWidth - 85) {
          this.xpos += 85;
        }

        this.element.style.backgroundPositionY = '0px';
      } else if (keyCode === 'ArrowLeft') {
        if (this.xpos > 0) {
          this.xpos -= 85;
        }

        this.element.style.backgroundPositionY = '-85px';
      } else if (keyCode === 'ArrowDown') {
        if (this.ypos < stageHeight - 85) {
          this.ypos += 85;
        }

        this.element.style.backgroundPositionY = '-170px';
      } else if (keyCode === 'ArrowUp') {
        if (this.ypos > 0) {
          this.ypos -= 85;
        }

        this.element.style.backgroundPositionY = '-255px';
      }
    }
    this.update();
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }
  update = () => {
    let tileL = this.xpos - (this.xpos % 85);
    let tileT = this.ypos - (this.ypos % 85);
    this.element.style.left = String(tileL) + 'px';
    this.element.style.top = String(tileT) + 'px';
    if (this.element.style.backgroundPositionX === '0px') {
      this.element.style.backgroundPositionX = '85px';
    } else {
      this.element.style.backgroundPositionX = '0px';
    }
  };
}
