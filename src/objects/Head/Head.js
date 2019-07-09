/**
 * @exports Head
 */

import { Group } from 'three';
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader';

export default class Head extends Group {
  constructor() {

    super();

    let mtlLoader = new MTLLoader();

    let objLoader = new OBJLoader();

    this.name = 'head';

    let thisThis = this;

    mtlLoader
      .setPath('assets/objects/Head/')
      .load('./head.mtl', function (materials) {
        materials.preload();

        objLoader
          .setMaterials(materials)
          .load('assets/objects/Head/head.obj', (mesh) => {
            thisThis.add(mesh);
          });
      }
      );
  }
}

