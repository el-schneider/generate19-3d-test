import { Group } from 'three';
import BasicLights from './Lights.js';
import Head from './Head/Head.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    const lights = new BasicLights();

    const head = new Head();

    this.add(head, lights);
  }

  update(timeStamp) {
    // this.rotation.y = timeStamp / 10000;
  }

}