class UI {
  constructor() {
    this.results = document.querySelector('.output');
    this.inputField = document.querySelector('#inputDefault');
               
  }

  showResults(resData) {
    
    let output = '';
    resData.forEach( (resData) => {
      output += `
      <div class="card border-light m-3">
        <div class="card-header">title: ${resData.position_title}</div>
        <div class="card-body">
          <h4 class="card-title">Organization Name: ${resData.organization_name}</h4>
          <h6 class="card-title">start date: ${resData.start_date}  end date: ${resData.end_date} </h6>          
          <h5 class="card-title">Location: ${resData.locations}</h5>
        </div>
          <div class="card-footer text-muted">
            <a href="${resData.url}" rel="noopener noreferrer" class="card-link"> find out more </a>
          </div>
      </div>`;
    });

    this.results.innerHTML = output;
    console.log(resData);
    
  }

  clearFields() {
    this.inputField.value = '';

  }
  printMsg(msg, classValue) {
    this.clearMsg();
    const div = document.createElement('div');
    div.className = classValue;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.form-group');
    const out = document.querySelector('.output');
    container.insertBefore(div, out);
    //timeout
    setTimeout(() => {
      this.clearMsg()
    }, 2000);

  }
  clearMsg() {
    const currentMsg = document.querySelector('.alert');
    if(currentMsg) {
      currentMsg.remove();
    }

  }
  

}

export const ui = new UI();