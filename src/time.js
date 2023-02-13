import moment from 'moment';

const actualTime = document.createElement('p');

actualTime.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
document.body.appendChild(actualTime);
