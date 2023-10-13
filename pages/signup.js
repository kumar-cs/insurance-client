import createUser from "./createUser"
import styles from '../styles/Signup.module.css'
import { useState } from "react"
import Style from '../styles/newpage.module.css';



export default function Signup() {

  

  const [data, setdata] = useState({name: "",father_name: "",age: "",address: "",mobile_number: "",martial_status: "",spouse_name: "",children_male: "",children_female: "",email_id:"",aadhar_number: "",dob: "",insurance_company_name: "",insurance_policy_number: "",insurance_assured_sum: "",insurance_yearly_premium_sum: ""})
  console.log('data',data)
  
    async function submitHandler(){
    alert(JSON.stringify(data))
    let keys = Object.keys(data)
    let flag = true

    keys.forEach(element => {
        if(data[element]==""){
            flag = false
        } 
    });
        if(flag){
            let response = await createUser(data);
            if(response.status == 201){
                alert('Signed Up Successfully')
            }else{
                alert('Sign up failed, Please try again after sometime')
            }
        }else{
            alert("**** Please fill the all required fields *****")
        }
    }

    return (<>
    <div className={styles.container}>
    <header>Registration Form</header>    
    <form action="#" className={styles.form}>
    <div className={Style.inputcontainer}>
      <input type='text' value={data.name} onChange={(e)=>{setdata({...data,name: e.target.value})}} required/>
      <label className={data.name && Style.filled}>
        Name
      </label>
    </div>
    <div className={styles.column}>
      <div className={Style.inputcontainer}>
        <input type='number' value={data.age} onChange={(e)=>{setdata({...data,age: e.target.value})}} required/>
        <label className={data.age && Style.filled}>
          Age
        </label>
      </div>
      <div className={Style.inputcontainer} style={{width:'201px'}}>
        <input type='date' value={data.dob} onChange={(e)=>{setdata({...data,dob: e.target.value})}} required/>
      </div>
      </div>
      <div className={styles.selectbox}>
          <select>
            <option hidden>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
      </div>
      <div className={styles.genderbox}> <h3>Contact Info</h3> </div>

      <div className={styles.inputbox.address}>
      <div className={Style.inputcontainer}>
        <input type='email' value={data.email_id} onChange={(e)=>{setdata({...data,email_id: e.target.value})}} required/>
        <label className={data.email_id && Style.filled}>
          Email
        </label>
      </div>

      <div className={Style.inputcontainer}>
        <input type='number' value={data.mobile_number} onChange={(e)=>{setdata({...data,mobile_number: e.target.value})}} required/>
        <label className={data.mobile_number && Style.filled}>
          Phone Number
        </label>
      </div>
      
      <div className={Style.inputcontainer}>
        <input type='text' value={data.address} onChange={(e)=>{setdata({...data,address: e.target.value})}} required/>
        <label className={data.address && Style.filled}>
          Address
        </label>
      </div>
      <div className={styles.column}>
        <div className={Style.inputcontainer}>
          <input type='text' value={data.address} onChange={(e)=>{setdata({...data,address: e.target.value})}} required/>
          <label className={data.address && Style.filled}>
            City
          </label>
        </div>
        <div className={Style.inputcontainer}>
          <input type='number' value={data.address} onChange={(e)=>{setdata({...data,address: e.target.value})}} required/>
          <label className={data.address && Style.filled}>
            Pincode
          </label>
        </div>
      </div>
      </div>
      <div className={styles.genderbox}> <h3>Personal Info</h3> </div> 
      <div className={Style.inputcontainer}>
        <input type='number' value={data.aadhar_number} onChange={(e)=>{setdata({...data,aadhar_number: e.target.value})}} required/>
        <label className={data.aadhar_number && Style.filled}>
          Aadhar Number
        </label>
      </div>
      <div className={Style.inputcontainer}>
          <input type='text' value={data.father_name} onChange={(e)=>{setdata({...data,father_name: e.target.value})}} required/>
          <label className={data.father_name && Style.filled}>
            Father Name
          </label>
        </div>
        <div className={styles.selectbox}>
          <select value={data.martial_status} onChange={(e)=>{setdata({...data,martial_status: e.target.value})}}>
            <option hidden>Martial Status</option>
            <option>Married</option>
            <option>Unmarried</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <div className={Style.inputcontainer}>
          <input type='text' value={data.spouse_name} onChange={(e)=>{setdata({...data,spouse_name: e.target.value})}} required/>
          <label className={data.spouse_name && Style.filled}>
            Spouse Name
          </label>
        </div>
        <div className={styles.column}>
          <div className={Style.inputcontainer}>
            <input type='number' value={data.children_male} onChange={(e)=>{setdata({...data,children_male: e.target.value})}} required/>
            <label className={data.children_male && Style.filled}>
            Male Child
            </label>
          </div>
          <div className={Style.inputcontainer}>
          <input type="number" value={data.children_female} onChange={(e)=>{setdata({...data,children_female: e.target.value})}} required />
          <label className={data.children_female && Style.filled}>
            Female Child
          </label>
          </div>
        </div>
        <div className={styles.genderbox}> <h3>Insurance Info</h3> </div> 
        <div className={Style.inputcontainer}>
          <input type='text' value={data.insurance_company_name} onChange={(e)=>{setdata({...data,insurance_company_name: e.target.value})}} required/>
          <label className={data.insurance_company_name && Style.filled}>
            Company Name
          </label>
        </div>
        <div className={Style.inputcontainer}>
          <input type='number' value={data.insurance_policy_number} onChange={(e)=>{setdata({...data,insurance_policy_number: e.target.value})}} required/>
          <label className={data.insurance_policy_number && Style.filled}>
            Policy Number
          </label>
        </div>
        <div className={styles.column}>
        <div className={Style.inputcontainer}>
          <input type='number' value={data.insurance_assured_sum} onChange={(e)=>{setdata({...data,insurance_assured_sum: e.target.value})}} required/>
          <label className={data.insurance_assured_sum && Style.filled}>
            Assured Sum
          </label>
        </div>
        <div className={Style.inputcontainer}>
          <input type='number' value={data.insurance_yearly_premium_sum} onChange={(e)=>{setdata({...data,insurance_yearly_premium_sum: e.target.value})}} required/>
          <label className={data.insurance_yearly_premium_sum && Style.filled}>
            Yearly Premium Sum
          </label>
        </div>
        </div>

        <div className={Style.inputcontainer}>
          <input type='file' required/>
          <label className={Style.filled}>
            Recent Photo
          </label>
        </div>
        <button className={styles.button} onClick={submitHandler}>submit</button>
    </form>
    
</div>


    </>
)}

  //     <>
  //     <div className={styles.{styles.mainDiv}>
  //       <div className={styles.{styles.imageSection}>
  //         <Image src={sankara} alt="Image" />
  //       </div>

  //       <div className={styles.{styles.container}>
  //                   <div className={styles.{styles.formExamples}>
  //                       <p className={styles.{styles.signup}>REGISTRATION FORM</p>
  //                   </div>

  //       <form action="" method="get"className={styles.{styles.form}>
  //           <div className={styles.{styles.formDiv}>

  //                   <div className={styles.{styles.formExamples}>
  //                       <p className={styles.{styles.subHeading}>Personal Details</p>
  //                   </div>
  //                   <div className={styles.{styles.formExample}>
  //                       <label for="fname">Name :</label>
  //                       <input type="text" name="name" value={data.name} onChange={(e)=>{setdata({...data,name: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="fname">Father Name :</label>
  //                       <input type="text" name="name" value={data.father_name} onChange={(e)=>{setdata({...data,father_name: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="fname">Age :</label>
  //                       <input type="number" name="name" value={data.age} onChange={(e)=>{setdata({...data,age: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="fname">Date of Birth :</label>
  //                       <input type="date" name="name" value={data.dob} onChange={(e)=>{setdata({...data,dob: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="fname">Address :</label>
  //                       <input type="text" name="name" value={data.address} onChange={(e)=>{setdata({...data,address: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="email">Email Id :</label>
  //                       <input type="email" name="name" value={data.email_id} onChange={(e)=>{setdata({...data,email_id: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="mobile number">Mobile Number :</label>
  //                       <input type="number" name="name" value={data.mobile_number} onChange={(e)=>{setdata({...data,mobile_number: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="Aadhar Number">Aadhar Number :</label>
  //                       <input type="number" name="name" value={data.aadhar_number} onChange={(e)=>{setdata({...data,aadhar_number: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="Status">Martial Status :</label>
  //                       <input type="text" name="name" value={data.martial_status} onChange={(e)=>{setdata({...data,martial_status: e.target.value})}} id="name"  />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="Spouse Name">Spouse Name :</label>
  //                       <input type="text" name="name" value={data.spouse_name} onChange={(e)=>{setdata({...data,spouse_name: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="count">Male Child :</label>
  //                       <input type="number" name="name" value={data.children_male} onChange={(e)=>{setdata({...data,children_male: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="count">Female Child :</label>
  //                       <input type="number" name="name" value={data.children_female} onChange={(e)=>{setdata({...data,children_female: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <p className={styles.{styles.subHeading}>Insurance Details</p>
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="Company Name">Company Name :</label>
  //                       <input type="text" name="name" value={data.insurance_company_name} onChange={(e)=>{setdata({...data,insurance_company_name: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="Policy Number">Policy Number :</label>
  //                       <input type="number" name="name" value={data.insurance_policy_number} onChange={(e)=>{setdata({...data,insurance_policy_number: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="Assured Sum">Assured Sum :</label>
  //                       <input type="number" name="name" value={data.insurance_assured_sum} onChange={(e)=>{setdata({...data,insurance_assured_sum: e.target.value})}} id="name" required />
  //                     </div>
  //                     <div className={styles.{styles.formExample}>
  //                       <label for="Yearly Premium">Yearly Premium Sum :</label>
  //                       <input type="number" name="name" value={data.insurance_yearly_premium_sum} onChange={(e)=>{setdata({...data,insurance_yearly_premium_sum: e.target.value})}} id="name" required />
  //                     </div>
  //                   </div>
  //               </form>
  //                   <div className={styles.{styles.submit}>
  //                     <button type="submit" onClick={submitHandler}>Sign Up</button>
  //                   </div>
  //               </div>
  //           </div>
  //     </>
  //   )
  // }

  // <div className={styles.column}>
  //       <div className={styles.inputbox}>
  //         <input type="number" placeholder="age" value={data.age} onChange={(e)=>{setdata({...data,age: e.target.value})}} required />
  //       </div>
  //       <div className={styles.inputbox}>
  //         <input type="date" placeholder="Enter Date of Birth" value={data.dob} onChange={(e)=>{setdata({...data,dob: e.target.value})}} required />
  //       </div>
  //     </div>
  //     <div className={styles.selectbox}>
  //         <select>
  //           <option hidden>Gender</option>
  //           <option>Male</option>
  //           <option>Female</option>
  //           <option>Others</option>
  //         </select>
  //     </div>
  //     <div className={styles.genderbox}> <h3>Contact Info</h3> </div>
  //     <div className={styles.inputbox.address}>
  //     <div className={styles.inputbox}>
  //       <input type="email" placeholder="Enter Email" value={data.email_id} onChange={(e)=>{setdata({...data,email_id: e.target.value})}} required />
  //     </div>
  //     <div className={styles.inputbox}>
  //       <input type="number" placeholder="Enter Phone Number" value={data.mobile_number} onChange={(e)=>{setdata({...data,mobile_number: e.target.value})}}  required />
  //     </div>
  //     <div className={styles.inputbox}>
  //       <input type="text" placeholder="Enter Street Address" value={data.address} onChange={(e)=>{setdata({...data,address: e.target.value})}} required />
  //     </div>
  //       <div className={styles.column}>
  //         <div className={styles.inputbox}>
  //         <input type="text" placeholder="Enter your city" required />
  //       </div>
  //       <div className={styles.inputbox}>
  //         <input type="number" placeholder="postal code" required />
  //       </div>
  //       </div>
  //     </div>
  //     <div className={styles.genderbox}> <h3>Personal Info</h3> </div> 
  //     <div className={styles.inputbox}>
  //         <input type="number" placeholder="Enter your Aadhar Number" value={data.aadhar_number} onChange={(e)=>{setdata({...data,aadhar_number: e.target.value})}} required />
  //       </div>
  //       <div className={styles.inputbox}>
  //         <input type="text" placeholder="Enter father name" value={data.father_name} onChange={(e)=>{setdata({...data,father_name: e.target.value})}} required />
  //       </div>
  //       <div className={styles.selectbox}>
  //         <select value={data.martial_status} onChange={(e)=>{setdata({...data,martial_status: e.target.value})}}>
  //           <option hidden>Martial Status</option>
  //           <option>Married</option>
  //           <option>Unmarried</option>
  //           <option>Prefer not to say</option>
  //         </select>
  //       </div>
  //       <div className={styles.inputbox}>
  //         <input type="text" placeholder="Enter spouse name" value={data.spouse_name} onChange={(e)=>{setdata({...data,spouse_name: e.target.value})}} required />
  //       </div>
  //       <div className={styles.column}>
  //         <div className={styles.inputbox}>
  //           <input type="number" placeholder="No.of Male child" value={data.children_male} onChange={(e)=>{setdata({...data,children_male: e.target.value})}} required />
  //         </div>
  //         <div className={styles.inputbox}>
  //           <input type="number" placeholder="No.of Female child" value={data.children_female} onChange={(e)=>{setdata({...data,children_female: e.target.value})}} required />
  //         </div>
  //       </div>

  //     <div className={styles.genderbox}> <h3>Insurance Info</h3> </div> 
  //       <div className={styles.inputbox}>
  //         <input type="text" placeholder="Enter your Company Name" value={data.insurance_company_name} onChange={(e)=>{setdata({...data,insurance_company_name: e.target.value})}} required />
  //       </div>
  //       <div className={styles.inputbox}>
  //         <input type="number" placeholder="Enter your Policy Number" value={data.insurance_policy_number} onChange={(e)=>{setdata({...data,insurance_policy_number: e.target.value})}} required />
  //       </div>
  //       <div className={styles.column}>
  //         <div className={styles.inputbox}>
  //           <input type="number" placeholder="Early Premium Sum" value={data.insurance_assured_sum} onChange={(e)=>{setdata({...data,insurance_assured_sum: e.target.value})}} required />
  //         </div>
  //         <div className={styles.inputbox}>
  //           <input type="number" placeholder="Assured Sum" value={data.insurance_yearly_premium_sum} onChange={(e)=>{setdata({...data,insurance_yearly_premium_sum: e.target.value})}} required />
  //         </div>
  //         </div> */