// import './index.css';
import numeral from 'numeral';

const conseValue = new numeral(1000).format('$0,0.00');
console.log(`I would pay ${conseValue} for this awesome course!`);
