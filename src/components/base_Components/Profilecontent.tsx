'use client';

import React, { useState, useEffect } from 'react';
import { removeacc, getUser, updateUser } from '../../actions/accountActions';
import DeleteUser from './Deleteuserpopup';
import styles from '../../styles/profile.module.css';
import { Input, Button } from 'antd';
import { useRouter } from 'next/navigation';

const Content = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [token, setToken] = useState<String | null>(null);
  // const token = window.localStorage.getItem("userDetails");
  const router = useRouter();
  var [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phoneNumber: '',
    token
  });
  useEffect(() => {
    setToken(window.localStorage.getItem('userDetails'));
  }, []);
  useEffect(() => {
    // getUser(token).then((data)=>{
    //     console.log(data);
    //     if(!data) return;
    //     setDetails(data);
    // })
  }, [token]);

  const clear = () => {
    setDetails({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      phoneNumber: '',
      token
    });
  };
  const success = () => {
    removeacc(details.email);
    router.push('/');
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser(details).then(data => {
      setDetails(data);
      alert('User Details Updated Successfully');
    });
  };
  return (
    <div>
      <main>
        <h2 className={styles.headertext3}>
          Hello User<span>{details.firstName}</span>
        </h2>
        <br />
        <h2 className={styles.headertext2}>Personal Details</h2>
        <br />
        <br />

        <label className={styles.label}>First Name</label>
        <label className={styles.label1}>Last Name</label>
        <label className={styles.label2}>Gender</label>
        <label className={styles.label3}>Phone Number</label>

        <div className={styles.align}>
          <div className={styles.input}>
            <Input
              placeholder='FirstName'
              onChange={handleChange}
              value={details.firstName}
              name='firstName'
              required
            />
          </div>

          <div className={styles.input}>
            <Input placeholder='LastName' onChange={handleChange} value={details.lastName} name='lastName' required />
          </div>

          <div className={styles.input}>
            <Input
              placeholder='Gender'
              type='text'
              onChange={handleChange}
              value={details.gender}
              name='gender'
              required
            />
          </div>

          <div className={styles.input}>
            <Input
              placeholder='PhoneNumber'
              type='number'
              onChange={handleChange}
              value={details.phoneNumber}
              name='phoneNumber'
              required
            />
          </div>

          <div>
            <br />
            <br />
            <button className={styles.pagebutton} onClick={handleSubmit}>
              Update
            </button>
            <button className={styles.pagebutton} onClick={clear}>
              Clear
            </button>
          </div>

          <div className={styles.divider}></div>

          <Button
            type='primary'
            danger
            className='ml-profile font-serif h-button text-base'
            onClick={() => setIsPopupVisible(true)}
          >
            Remove Account
          </Button>
        </div>
      </main>
      <DeleteUser trigger={isPopupVisible}>
        <h2 className={styles.headertext4}>Are you Sure</h2>
        <br />
        <br />
        <Button onClick={success} type='primary' danger className={styles.yes}>
          Yes
        </Button>
        <Button onClick={() => setIsPopupVisible(false)} type='primary' danger className={styles.no}>
          No
        </Button>
      </DeleteUser>
    </div>
  );
};

export default Content;
