'use client';

import styles from '../../styles/profile.module.css';
import React, { useState } from 'react';
import Address from '../../components/base_Components/Addresscontent';
import Content from '@/components/base_Components/Profilecontent';

const VerticalTabs = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={styles.tabs}>
        <div className={styles.main2}>
          {tabs.map((tab: any, index: any) => (
            <button
              key={index}
              className={`px-4 py-2 text-antique ${activeTab === index ? 'bg-coral' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.content}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default function profilepage() {
  const tabs = [
    {
      label: 'Profile',
      content: Content()
    },
    {
      label: 'Address',
      content: Address()
    }
  ];

  return (
    <body className='bg-gradient-to-r from-orange to-coral flex flex-col h-screen'>
      <div className='container mx-auto p-4 mt-20'>
        <VerticalTabs tabs={tabs} />
      </div>
    </body>
  );
}
