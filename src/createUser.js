import axios from 'axios';


export default async function createUser(request){

let data = JSON.stringify({
  "name": request.name,
  "father_name": request.father_name,
  "age": request.age,
  "address": request.address,
  "mobile_number": request.mobile_number,
  "martial_status":request.martial_status,
  "spouse_name": request.spouse_name,
  "children_male": request.children_male,
  "children_female": request.children_female,
  "email_id": request.email_id,
  "aadhar_number": request.aadhar_number,
  "dob": request.dob,
  "insurance_details": {
    "insurance_company_name": request.insurance_company_name,
    "insurance_policy_number": request.insurance_policy_number,
    "insurance_assured_sum": request.insurance_assured_sum,
    "insurance_yearly_premium_sum": request.insurance_yearly_premium_sum
  }
});

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/insurance/signup',
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
    },
    data : data
  };

return await axios.request(config)
  .then((response) => {
    return response.data
  })
  .catch((error) => {
    console.log(error);
  });

}