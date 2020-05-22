class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  render() {
    const stageElm = document.createElement('div');
    stageElm.className = `entity entity--${this.type}`;

    return stageElm;
  }
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }

  collisionDetection() {}
}
