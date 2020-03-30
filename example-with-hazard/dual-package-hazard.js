import assert from 'assert';

import { v1 as uuidv1 } from 'uuid';
import { default as uuidhazard } from 'uuid-dual-package-hazard';

function nodePart(uuidStr) {
  return uuidStr.split('-').slice(2).join('-');
}

const firstv1 = uuidv1();
const secondv1 = uuidv1();

const firstHazardv1 = uuidhazard.v1();
const secondHazardv1 = uuidhazard.v1();

console.log('direct v1 #1', firstv1);
console.log('direct v1 #2', secondv1);
console.log('hazard v1 #1', firstHazardv1);
console.log('hazard v1 #2', secondHazardv1);

assert.strictEqual(nodePart(firstv1), nodePart(secondv1));
assert.strictEqual(nodePart(firstHazardv1), nodePart(secondHazardv1));

assert.strictEqual(nodePart(firstv1), nodePart(firstHazardv1));
