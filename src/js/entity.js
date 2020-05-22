class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  render() {
    const stageElms = document.createElement('div');
    stageElms.className = `entity entity--${this.type}`;

    return stageElms;
  }
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }

  collisionDetection() {}
}
