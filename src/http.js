class Http {
  
  async getJob(query) {
    const response = await fetch(`https://jobs.search.gov/jobs/search.json?query=${query}`);
    //please make sure to run app while server returning response I understand I had no rights to send-receive query
    
    const resData = await response.json();
    return resData;
    /*please make sure to return correct response as per example send redData should return an Array with JSON
    
    [{"id":"usajobs:515658500","position_title":"Registered Nurse INTENSIVE CARE UNIT","organization_name":"Veterans Affairs, Veterans Health Administration","rate_interval_code":"PA","minimum":44276,"maximum":99776,"start_date":"2018-10-31","end_date":"2019-09-30","locations":["Muskogee, OK"],"url":"https://www.usajobs.gov/GetJob/ViewDetails/515658500"}, ...]
    */
  }
 
}

export const http = new Http();
