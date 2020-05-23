import * as mathUtils from './js/mathUtils'
import * as common from './js/common'

console.log(mathUtils.sum(1));
console.log(mathUtils.arrMax([2,3,4]));

setInterval(() => {
  console.log(common.formatDate(new Date()));
}, 1000);

require('./css/normal.css');
require('./css/special.less');
