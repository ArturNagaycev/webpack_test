import '../../styles/main.scss';
import './time.scss';
import moment from 'moment';

const actualTime = document.createElement('p');

actualTime.classList.add("time");
actualTime.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
document.body.appendChild(actualTime);
