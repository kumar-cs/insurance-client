import createUser from "./createUser"
import styles from '../styles/Signup.module.css'
import Image from "next/image"
import sankara from '../public/sankara.jpg'
import { useState } from "react"




export default function Signup() {

    async function submitHandler(){
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
    const [data, setdata] = useState({name: "",father_name: "",age: "",address: "",mobile_number: "",martial_status: "",spouse_name: "",children_male: "",children_female: "",email_id:"",aadhar_number: "",dob: "",insurance_company_name: "",insurance_policy_number: "",insurance_assured_sum: "",insurance_yearly_premium_sum: ""})
    return (
      <>
      <div className={styles.mainDiv}>
        <div className={styles.imageSection}>
          <Image src={sankara} alt="Image" />
        </div>

        <div className={styles.container}>
                    <div className={styles.formExamples}>
                        <p className={styles.signup}>REGISTRATION FORM</p>
                    </div>

        <form action="" method="get"className={styles.form}>
            <div className={styles.formDiv}>

                    <div className={styles.formExamples}>
                        <p className={styles.subHeading}>Personal Details</p>
                    </div>
                    <div className={styles.formExample}>
                        <label for="fname">Name :</label>
                        <input type="text" name="name" value={data.name} onChange={(e)=>{setdata({...data,name: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="fname">Father Name :</label>
                        <input type="text" name="name" value={data.father_name} onChange={(e)=>{setdata({...data,father_name: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="fname">Age :</label>
                        <input type="number" name="name" value={data.age} onChange={(e)=>{setdata({...data,age: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="fname">Date of Birth :</label>
                        <input type="date" name="name" value={data.dob} onChange={(e)=>{setdata({...data,dob: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="fname">Address :</label>
                        <input type="text" name="name" value={data.address} onChange={(e)=>{setdata({...data,address: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="email">Email Id :</label>
                        <input type="email" name="name" value={data.email_id} onChange={(e)=>{setdata({...data,email_id: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="mobile number">Mobile Number :</label>
                        <input type="number" name="name" value={data.mobile_number} onChange={(e)=>{setdata({...data,mobile_number: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="Aadhar Number">Aadhar Number :</label>
                        <input type="number" name="name" value={data.aadhar_number} onChange={(e)=>{setdata({...data,aadhar_number: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="Status">Martial Status :</label>
                        <input type="text" name="name" value={data.martial_status} onChange={(e)=>{setdata({...data,martial_status: e.target.value})}} id="name"  />
                      </div>
                      <div className={styles.formExample}>
                        <label for="Spouse Name">Spouse Name :</label>
                        <input type="text" name="name" value={data.spouse_name} onChange={(e)=>{setdata({...data,spouse_name: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="count">Male Child :</label>
                        <input type="number" name="name" value={data.children_male} onChange={(e)=>{setdata({...data,children_male: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="count">Female Child :</label>
                        <input type="number" name="name" value={data.children_female} onChange={(e)=>{setdata({...data,children_female: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <p className={styles.subHeading}>Insurance Details</p>
                      </div>
                      <div className={styles.formExample}>
                        <label for="Company Name">Company Name :</label>
                        <input type="text" name="name" value={data.insurance_company_name} onChange={(e)=>{setdata({...data,insurance_company_name: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="Policy Number">Policy Number :</label>
                        <input type="number" name="name" value={data.insurance_policy_number} onChange={(e)=>{setdata({...data,insurance_policy_number: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="Assured Sum">Assured Sum :</label>
                        <input type="number" name="name" value={data.insurance_assured_sum} onChange={(e)=>{setdata({...data,insurance_assured_sum: e.target.value})}} id="name" required />
                      </div>
                      <div className={styles.formExample}>
                        <label for="Yearly Premium">Yearly Premium Sum :</label>
                        <input type="number" name="name" value={data.insurance_yearly_premium_sum} onChange={(e)=>{setdata({...data,insurance_yearly_premium_sum: e.target.value})}} id="name" required />
                      </div>
                    </div>
                </form>
                    <div className={styles.submit}>
                      <button type="submit" onClick={submitHandler}>Sign Up</button>
                    </div>
                </div>
            </div>
      </>
    )
  }