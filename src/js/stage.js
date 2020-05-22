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

<<<<<<< HEAD
  collisionDetection = (x,y) => {
    entities.forEach((element) => {
      console.log(element.x*85,element.y*85);

      if (element.x*(1-85) === x && element.y*(1-85) === y){
        window.alert('collision!');
      }
      
    });
=======
  removeEntity(this.element) {
>>>>>>> 664a455569f193791d8285504792b91253e31114

  }
}
