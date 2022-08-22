import { BasicShadowMap, Vector3 } from '../node_modules/three/build/three.module.js';
import { notEqual, equal } from 'node:assert';

describe('The THREE object', function() {
  it('should have a defined BasicShadowMap constant', function() {
    notEqual('undefined', BasicShadowMap);
  }),

  it('should be able to construct a Vector3 with default of x=0', function() {
    const vec3 = new Vector3();
    equal(0, vec3.x);
  })
})