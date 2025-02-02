/**
 * Checks if all properties in the `css-modules` directory are included in the propertiesOrder array.
 */
import * as cssModules from '../lib/css-modules/index.js';
import propertiesOrder from '../config.js';

const allProps = createFlatArray(cssModules);
const orderedProps = createFlatArray(propertiesOrder.rules['order/properties-order'][0]);

const missingProps = allProps.filter((value) => !orderedProps.includes(value));

function createFlatArray(obj) {
  const flatArray = [];

  for (const key in obj) {
    const values = Object.values(obj[key]);
    flatArray.push(...values);
  }
  return flatArray.flat(Infinity);
}

// eslint-disable-next-line no-console
console.log('Missing Props:', missingProps);
