"use client"

import React,{useState, useEffect} from 'react';
import Avatar from 'react-avatar';
import AddressPopupForm from './Addresspopup'
import styles from '../../styles/profile.module.css';
import { Input, Button } from 'antd';
import {saveAddress, getStates, getCountry, getAddress, updateAddress, deleteAddress} from '../../actions/addressActions'

interface combineAddress {
  
    doorNo: string,
    street: string,
    city: String,
    state: String,
    country: String

}

 const Address = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    // const token = window.localStorage.getItem("userDetails");
    var [isTextarea, setIsTextarea] = useState<combineAddress[]>([]);
    const [isTextareaVisible, setIsTextareaVisible] = useState(false);
    var [selected, setSelected] = useState("");
    var [address, setAddress] = useState({
      doorNo:"", 
      street:"",
      city:"",
      state:"",
      country:"",
    });
  
    const [stateList,setStateList] = useState([]);
    
    var [selectCountry, setSelectCountry] = useState("");
    var [IsEditPopup, setIsEditPopup] = useState(false);
    const [countryList, setCountry] = useState([])
    

    useEffect(()=>{
      const token = window.localStorage.getItem("userDetails");
        getStates().then((data)=>{
            setStateList(data);
        })
        getCountry().then((data)=>{
            setCountry(data);
        })
        getAddress(address,token).then((data)=>{
          if(data!=null){
            setIsTextareaVisible(true);
            setIsTextarea(data);
            setAddress(data)
          }
        })

    },[])

    const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(selected = event.target.value);

      console.log("State change");
    };

    const countryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectCountry(selectCountry = event.target.value);

      console.log("Country change");
    };

    const clear = ()=>{
      setAddress({
      doorNo:"", 
      street:"",
      city:"",
      state:stateList.length > 0 ? stateList[0] : "",
      country:"",
      });
    } 

    const handleChange = (e: any) => {
      const { name, value } = e.target;
         setAddress({
          ...address,
          [name]: value,
        });
      }
    const handleAdd = ()=>{
      setIsPopupVisible(true);
      setIsEditPopup(false);
      clear();
    }

    const handleEdit = (address:any)=>{
      setIsPopupVisible(true);
      setIsEditPopup(true);
      setAddress(address);
    }

    const handleDelete = (address:any) =>{
      const token = window.localStorage.getItem("userDetails");
      deleteAddress(address,token).then((data)=>{
        alert(data);
      })
   }
    const handleUpdate = (address:any)=>{
      const token = window.localStorage.getItem("userDetails");
      console.log(address);
      updateAddress(address,token).then((data)=>{
        alert(data);
      })
    }
    const handleSubmit = (e: any) =>{
      e.preventDefault();
      address.state = selected;
      address.country = selectCountry;
      const token = window.localStorage.getItem("userDetails");
      saveAddress(address,token).then((data)=>{
        
      setIsTextarea(isTextarea=data);
      console.log("....."+isTextarea.length);
      setIsTextareaVisible(true);
      clear();
      }).catch((error)=>{
    console.log("Error");
    })

    };

    return(
      <div>
        <main>
        <h2 className={styles.headertext3}>User Address</h2><br/><br/>  
        <Button onClick={handleAdd} type='primary' danger className='font-serif h-button ml-profile text-base'>+ Add new Address</Button>
         <div>

          {isTextareaVisible ? isTextarea.map((address,index)=>(
          <div key={index} className={styles.box}>
          <textarea className={styles.textarea}>{address.doorNo + ", " + address.street + ", " + address.city + ", " + address.state + ", " + address.country}</textarea>
          <div className={styles.buttons}>
            <button className={styles.editbutton} onClick={()=>handleEdit(address)}>
              <Avatar src='../Assets/edit.png' className={styles.save} round size='30'></Avatar>
              </button>
            <button className={styles.deletebutton} onClick={()=>handleDelete(address)}>
              <Avatar src='../Assets/delete.png' className={styles.clear} round size='30'></Avatar>
              </button>
          </div>
          </div>)) :null}

         </div>
          
        </main>
        <AddressPopupForm trigger={isPopupVisible}>
          {
          IsEditPopup ? <button  onClick={()=>handleUpdate(address)}>
            <Avatar src='../Assets/savechanges.png' className={styles.save} round size='20'></Avatar>
            </button>
          :
          <button  onClick={handleSubmit}>
            <Avatar src='../Assets/save.png' className={styles.save} round size='20'></Avatar>
            </button>
            }
          <button onClick={clear}>
            <Avatar src='../Assets/clear.png' className={styles.clear} round size='20'></Avatar>
            </button> 
            <button  onClick={() => setIsPopupVisible(false)}>
                <Avatar src='../Assets/close.png' className={styles.close} round size='20'></Avatar>
                </button>
        <h2>Enter Your Address</h2><br/>
  
           <label>Door No</label>

           <div className={styles.input}>
            <Input placeholder="Door No" type='text' onChange={handleChange} value={address.doorNo} name='doorNo' required/>
           </div>
  
           <label>Street</label>
           <div className={styles.input}> 
            <Input placeholder="Street" type='text' onChange={handleChange} value={address.street} name='street' required/>
           </div>
  
           <label>City</label>
           <div className={styles.input}>
  
            <div className={styles.in} />
            <Input type='text' name='city' onChange={handleChange} value={address.city} placeholder='City' required/>
           </div>
  
           <label>State</label>
           
            <div id='option'>
                 <select value={IsEditPopup ? address.state:selected} onChange={optionChange} className={styles.states}>
                 <option value=''>Select a state</option>
                   {stateList.map(option => (
                   <option key={option} value={option}>
                   {option}
                    </option>
                   ))}
                 </select>
                 </div><br/>
          
           <label>Country</label>
             <div id='option'>

                 <select value={IsEditPopup ? address.country:selectCountry} onChange={countryChange} className={styles.states}>
                 <option value=''>Select a Country</option>
                   {countryList.map(option => (
                   <option key={option} value={option}>
                   {option}
                    </option>
                   ))}
                 </select>
                 </div><br/>

        </AddressPopupForm>
      </div>
  
    );
  }

export default Address;