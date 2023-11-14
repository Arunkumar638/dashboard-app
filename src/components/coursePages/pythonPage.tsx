import React, { useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, FloatButton } from 'antd';
import { useRouter } from 'next/navigation';
import { createFromIconfontCN } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Editor from '@monaco-editor/react';
import styles from '../../styles/sidebar.module.css';
import { Card } from 'antd';
import compileCode from '../../actions/compilerActions';
import pythonTopicList from '../../Content/Python.json'
import LoadPythonContent from '../LoadPythonContent';

const { Header, Sider } = Layout;


const Python: React.FC = () => {
  const router = useRouter();
  const [id,setId] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [userOutput, setUserOutput] = useState({msg:"",output:""});
  const [value, setValue] = useState(String || "");
  const [defaultmode,setDefault] = useState(true);
  const defaultId = 'python_introduction';
  const IconFont = createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js'  
  });
  const onClick: MenuProps['onClick'] = (e) => {
    setDefault(false);
    console.log(e);
    setId(e.key);
  };

  const clearOutput = () =>{
    setUserOutput({msg:"",output:""});
  }  
  const route = ()=>{
    router.push('/');
  }
  const Compile = ()=>{
    const usercode = {
      "code":value,
      "type":"python"
    }
    compileCode(usercode).then((data)=>{
      console.log(usercode);
      console.log(userOutput);
      setUserOutput(data);
    });
  }
  const clearcode = () =>{
  setValue("");
  clearOutput();
  } 

  const handleEditorChange = (value: any) => {
  setValue(value);
  };
  return (
    <Layout>
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={300} style={{height:'100vh'}}>
        <div className="demo-logo-vertical" />
        <Menu
        onClick={onClick}
        itemIcon={<IconFont type="icon-python" />}
        theme='dark'
        defaultSelectedKeys={['python_introduction']}
        style={{height:'840px'}}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={pythonTopicList}
        className='bg-dark-purple text-white font-bold text-l transition-all duration-1000 overflow-y-scroll'
        />
      </Sider>
      <Layout className=' bg-gradient-to-r from-orange to-coral'>
      <Header style={{ padding: 0}} className='bg-gradient-to-r from-orange to-coral shadow-lg'>
        <Button type="primary" icon={<ArrowLeftOutlined />} className='ml-top bg-blue' onClick={route}>Dashboard</Button>
        </Header>
        
          <div className={styles.position}>
            <div className={styles.editorPosition}>
            <Card title="Python Editor" bordered={true} className={`${collapsed?"w-card-expand":"w-card-collapse"} transition-all duration-500 bg-orange h-card`}>
            <FloatButton
             shape="square"
             type="primary"
             className={styles.compile}
             description="COMPILE"
             onClick={Compile}
            />
            <FloatButton
             shape="square"
             type="primary"
             className={styles.clear}
             description="CLEAR"
             onClick={clearcode}
            />         
            <Editor 
            height="400px" 
            defaultLanguage="python" 
            defaultValue="# Enter your code here" 
            onChange={handleEditorChange} 
            value={value}   
            options={{wordWrap:'on'}}                 
            className={`${collapsed?"w-expanded":"w-collapsed"}`}/>         
            </Card>          
            </div><br/>
            <div>
            <Card title="Output" className={`${collapsed?"w-card-expand":"w-card-collapse"} h-card-output overflow-y-scroll transition-all duration-500 bg-orange`}>
                <h1>{userOutput.msg}</h1><br/>
                 <h1>{userOutput.output}</h1> 
            </Card>
            </div>
            </div>     
            <Card className={`overflow-y-scroll ${collapsed?"w-courseCard-collapse":"w-courseCard-expand"} h-card-content bg-lavender`}
            style={{position:'relative',margin: '5px 5px'}}
            >
            {defaultmode && <LoadPythonContent id={defaultId}/>}  
            {!!id && <LoadPythonContent id={id}/>}
          </Card>
          
        
      </Layout>
    </Layout>
  );
};

export default Python;