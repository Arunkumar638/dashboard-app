import axios from "axios";

export const logoutAction = async(data:String)=>{ 

    return axios({
     method: 'delete',
     url: `http://192.168.1.48:8081/onlinelearning/logout/${data}`,
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     data:data,
     timeout: 5000, 
   })
     .then((response) => {
  
       return response.data;
  
     })
  }
  export function removeacc(Email:any){
 
    axios({
        method: 'delete',
        url: `http://192.168.1.48:8081/onlinelearning/deleteuser/${Email}`,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        timeout: 5000, 
      })
        .then((response) => {

          console.log(response.data);
          alert(response.data);

        })
        .catch((error) => {
          console.error('Error:', error);    
          if (error.response) {
            alert(error.response.data);
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
          }     
      }); 

}

export function getUser(email:String){

    return axios({
        method: 'get',
        url: `http://192.168.1.48:8081/onlinelearning/user-details/${email}`,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        timeout: 5000, 
      })
        .then((response) => {

          return response.data;
  
        })
        .catch((error) => {
          console.error('Error:', error);    
          if (error.response) {
            alert(error.response.data);
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
          }     
      }); 

}

export const updateUser = async(data: { firstName:String; lastName:String; email:String; gender:String; phoneNumber:String;})=>{ 
  console.log(data.email);
  return axios({
   method: 'put',
   url: `http://192.168.1.48:8081/onlinelearning/update-user/${data.email}`,
   headers: { 
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': "*"
   },
   data:data,
   timeout: 5000, 
 })
   .then((response) => {

     console.log(response.data);
     return response.data;
     
   })
   .catch((error) => {
     console.error('Error:', error);    
     if (error.response) {
       alert(error.response.data);
       console.log('Response data:', error.response.data);
       console.log('Response status:', error.response.status);
     }     
 });  
}