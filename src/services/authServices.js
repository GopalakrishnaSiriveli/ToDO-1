import axios from 'axios';

const SERVER_URL = 'https://todo-1-epp1.onrender.com/';



const registerUser = (data)=>{
    return axios.post(SERVER_URL+'/register',data);
}

const loginUser = (data)=>{
    return axios.post(SERVER_URL+'/login',data);
}


const AuthServices = {
    registerUser,
    loginUser
}


export default AuthServices;





