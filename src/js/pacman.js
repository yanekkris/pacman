class Pacman {
  constructor(xpos, ypos, mouth) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = mouth;
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
    if (keyCode === 'ArrowRight') {
      this.xpos += 85;
      this.element.style.backgroundPositionY = '0px';
    } else if (keyCode === 'ArrowLeft') {
      this.xpos -= 85;
      this.element.style.backgroundPositionY = '-85px';
    } else if (keyCode === 'ArrowDown') {
      this.ypos += 85;
      this.element.style.backgroundPositionY = '-170px';
    } else if (keyCode === 'ArrowUp') {
      this.ypos -= 85;
      this.element.style.backgroundPositionY = '-255px';
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
