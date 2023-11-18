import axios from 'axios';

const compileCode = async (data: { code: string; type: string }) => {
  return axios({
    method: 'post',
    url: 'http://192.168.1.48:8081/onlinelearning/execute',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: data,
    timeout: 5000 // Set a timeout of 5 seconds (adjust as needed)
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(data);
      console.error('Error:', error);
      if (error.response) {
        alert(error.response.data);
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
      }
    });
};

export default compileCode;
