const replacers= {" ": "%20", "&": "%26"};
const regex = new RegExp( Object.keys(replacers).join('|'), "g");

import { http } from './http';
import { ui } from './ui';



document.querySelector('#find').addEventListener('click', getResults);
document.querySelector('#inputDefault').addEventListener('keypress', (e) => {
  (e.key !== 'Enter') ? false : getResults(e);
});



function getResults(e) {    
  const input = document.querySelector('#inputDefault').value.trim();
  let query = input.replace(regex, match => replacers[match]);
  ui.clearFields();
  if(query !== ''){

    http.getJob(query)
    .then(resData => ui.showResults(resData))
    .catch(err => console.log(err));
  }else {
    ui.printMsg('please fill in field', 'alert alert-danger mt-2');
  }
  e.preventDefault();

}


