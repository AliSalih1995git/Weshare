import axios from 'axios';
import Cookies from 'js-cookie';

const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/`,
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
});

export default instance;
