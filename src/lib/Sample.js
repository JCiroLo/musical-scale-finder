export default class Sample {
  constructor(element) {
    this.element = new Audio(element);
  }

  play() {
    this.element.currentTime = 0;
    this.element.play();
  }
}
