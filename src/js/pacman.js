class Pacman {
  constructor(xpos, mouth) {
    this.xpos = xpos;
    this.mouth = mouth;
  }
  render() {
    const pacElm = document.createElement('div');
    pacElm.className = 'entity entity--pac pacboy-active-light';

    document.addEventListener('keydown', () => {
      if (event.code === 'ArrowRight') {
        this.moveRight();
      }
    });

    return pacElm;
  }

  moveRight() {
    this.xpos += 85;
    this.update();
  }
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }
  update = () => {
    const right = this.element.querySelector('.entity--pac');
    right.style.left = String(this.xpos) + 'px';
  };
}
