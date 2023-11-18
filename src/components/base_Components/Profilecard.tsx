'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Avatar, Button } from 'antd';
import styles from '../../styles/profilecard.module.css';
import { useRouter } from 'next/navigation';
import 'core-js-pure/stable/object/assign';
import { logoutAction } from '../../actions/accountActions';

const Profilecard = ({ isOpen, onClose }: any) => {
  const router = useRouter();
  const [userData, setUserData] = useState({ username: '', email: '', phoneNumber: '' });

  const route = () => {
    router.push('/profilepage');
    onclose;
  };

  const getloginStatus = async () => {
    var details = window.localStorage.getItem('userDetails');
    const response = await axios.get(`http://192.168.1.48:8080/onlinelearning/login-status/${details}`);
    var data = await response.data;
    setUserData(data);
  };

  const logout = () => {
    const data = window.localStorage.getItem('userDetails');
    // logoutAction(data).then((data)=>{
    //   window.localStorage.clear();
    //   router.push('/login');
    //   alert(data);
    // })
    console.log('0');
  };

  useEffect(() => {
    getloginStatus();
  }, []);
  return (
    <Card className={`${styles.profileCard} ${isOpen ? styles.show : styles.hide}`}>
      <Avatar src='./Assets/person.png' size={80} className='relative ml-avatar mt-avatar' />
      <Avatar src='../Assets/close.png' className={styles.close} size={20} onClick={onClose} />
      {userData ? (
        <div className={styles.cardContent}>
          <h2>Arunkumar{/*userData.firstName */}</h2>
          <p>arunkumar98svn@gmail.com{/*userData.email */}</p>
          <p>+91 6385469496{/*userData.phoneNumber */}</p>
        </div>
      ) : null}

      <Button onClick={route} className={styles.profileButton}>
        Profile Settings
      </Button>
      <Button onClick={logout} className={styles.closeButton}>
        Logout
      </Button>
    </Card>
  );
};

export default Profilecard;
