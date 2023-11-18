'use client';

import React, { useState, useEffect } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import styles from '../styles/style.module.css';
import { useRouter } from 'next/navigation';
import Profilecard from '../components/base_Components/Profilecard';
import { Row, Col, Input, Avatar } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import withAuth from '../hoc/Authentication';
import { Card } from 'antd';
// import type { SearchProps } from '../Search';
const { Meta } = Card;
const { Search } = Input;

const Home = () => {
  const router = useRouter();
  // const onSearch: SearchProps['onSearch'] = (value: any, _e: any, info: { source: any }) => console.log(info?.source, value);
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);

  //const [isChecked, setIsChecked] = useState(false);

  // var genderNames = [
  //   {text:"Gender",value:''},
  //   { text: "Male", value: "male" },
  //   { text: "Female", value: "female" },
  // ];
  // const [selected, setSelected] = useState(genderNames[0].value);
  // const optionChange = (event:any) => {
  //   setSelected(event.target.value);
  // };
  const pythonroute = () => {
    router.push('/python');
  };
  const JSroute = () => {
    router.push('/JS');
  };
  const reactRoute = () => {
    router.push('/react');
  };
  const nodeRoute = () => {
    router.push('/node');
  };
  const cRoute = () => {
    router.push('/c');
  };
  const handleToggleProfileCard = () => {
    setIsProfileCardOpen(!isProfileCardOpen);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    //setIsChecked(e.target.checked);
  };

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <div className={styles.body}>
      <Header className='flex flex-row bg-slate-100 shadow-lg'>
        <div className={styles.header}>E-Learning</div>
        <Search
          placeholder='What do you want to learn' /*onSearch={onSearch}*/
          size='large'
          type='primary'
          allowClear
          className='w-search mt-4 ml-search'
        />
        <Avatar src='./Assets/person.png' className='mt-4 ml-icon' size={40} onClick={handleToggleProfileCard} />
        <Profilecard isOpen={isProfileCardOpen} onClose={handleToggleProfileCard} />
      </Header>
      <Row>
        <Col>
          <div className={styles.filterLabel}>Filter by</div>
        </Col>
        <div className={styles.filter}>
          <span>Sort by:</span>
          {/* <select value={selected} onChange={optionChange} 
                className={styles.dropdown}>
                  {genderNames.map(option => (
                  <option key={option.value} value={option.value}>
                  {option.text}
                    </option>
                  ))}
                    </select> */}
        </div>
      </Row>
      <Row>
        <Col>
          <div className={styles.levelLabel}>Level</div>
          <Checkbox onChange={onChange} className={styles.options}>
            <span className='mr-8'>Beginner</span>
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} className={styles.options}>
            <span className='mr-8'>Intermediate</span>
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} className={styles.options}>
            <span className='mr-8'>Advanced</span>
          </Checkbox>
          <br />
        </Col>
        <Col className='pr-16'>
          <Card
            hoverable
            className={styles.courseCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>PYTHON</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Master your python programming <br />
              skills by taking up this beginner course
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Data Science</li>
                <li>AI & Machine Learning</li>
                <li>Cloud Automation</li>
                <li>Audio & Video applications</li>
                <li>Desktop GUI</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.cardArrow} onClick={pythonroute} size={60} />
            </span>
          </Card>
          <Card
            hoverable
            className={styles.courseCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>REACT</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Master your react fundamentals
              <br />
              for creating more powerful web
              <br />
              apps by using this course
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Software as a Service Apps</li>
                <li>Chat Apps </li>
                <li>Healthcare Apps</li>
                <li>Financial Tech Apps</li>
                <li>Learning Apps</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.cardArrow} onClick={reactRoute} size={60} />
            </span>
          </Card>

          <Card
            hoverable
            className={styles.courseCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>PYTHON</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Master your python programming <br />
              skills by taking up this beginner course
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Data Science</li>
                <li>AI & Machine Learning</li>
                <li>Cloud Automation</li>
                <li>Audio & Video applications</li>
                <li>Desktop GUI</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.cardArrow} onClick={pythonroute} size={60} />
            </span>
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            className={styles.courseColumnCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>JAVA</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Learn Java programming through
              <br />
              examples for absolute beginner
              <br />
              and obtain core Java skills!
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Mobile Application</li>
                <li>Web and App Server</li>
                <li>Enterprise Application</li>
                <li>Big Data</li>
                <li>Cloud Based Applications</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.cardArrow} onClick={pythonroute} size={60} />
            </span>
          </Card>
          <Card
            hoverable
            className={styles.courseColumnCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>NODE</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Learn one of the most popular <br />
              JavaScript runtime environment
              <br />
              and gain knowledge of Node
              <br />
              packages by obtaining this course
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Internet of Things (IoT)</li>
                <li>Streaming apps</li>
                <li>Microservices architecture</li>
                <li>Single-page applications</li>
                <li>Location-based apps</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.nodeArrow} onClick={nodeRoute} size={60} />
            </span>
          </Card>
          <Card
            hoverable
            className={styles.courseColumnCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>PYTHON</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Master your python programming <br />
              skills by taking up this beginner course
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Data Science</li>
                <li>AI & Machine Learning</li>
                <li>Cloud Automation</li>
                <li>Audio & Video applications</li>
                <li>Desktop GUI</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.cardArrow} onClick={pythonroute} size={60} />
            </span>
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            className={styles.courseColumnCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>JAVASCRIPT</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Master your JS programming <br />
              skills by taking up this beginner course
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Web Development</li>
                <li>Web Applications</li>
                <li>Presentations</li>
                <li>Server Applications</li>
                <li>Web Servers</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.cardArrow} onClick={JSroute} size={60} />
            </span>
          </Card>
          <Card
            hoverable
            className={styles.courseColumnCard}
            cover={
              <div className={styles.innerCard}>
                <span className={styles.cardHeader}>C</span>
              </div>
            }
          >
            <span className={styles.cardDescription}>
              Master your C programming <br />
              skills by taking up this beginner course
            </span>
            <br />
            <br />
            <span className={styles.cardListHead}>Applications</span>
            <span className={styles.cardList}>
              <ol className='list-disc ml-7'>
                <li>Web Development</li>
                <li>Web Applications</li>
                <li>Presentations</li>
                <li>Server Applications</li>
                <li>Web Servers</li>
              </ol>
              <Avatar icon={<HiArrowLongRight />} className={styles.cardArrow} onClick={cRoute} size={60} />
            </span>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
