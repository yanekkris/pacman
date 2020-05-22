class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render() {
    const stageElm = document.createElement('div');
    stageElm.className = 'stage';

    return stageElm;
  }
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }
  update = () => {
    const stageWidth = this.element.querySelector('.stage');
    stageWidth.style.width = `${this.width}px`;
    const stageHeight = this.element.querySelector('.stage');
    stageHeight.style.height = `${this.height}px`;
  };
}
