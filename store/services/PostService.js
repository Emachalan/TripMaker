import axios from 'axios';
// import Hand

export const PostService = async (endpoint, params) => {
  try {
    const {status, data} = await axios.post(endpoint, params);
    console.log("status...",status)
    if (status <= 200 || status >= 226) {
      return {success: true, data, message: 'Created Successfully'};
    } else if (status <= 400 || status >= 499) {
      return {success: false, data, message: 'Bad Request or Unauthorized'};
    } else if (status <= 500 || status >= 599) {
      return {success: false, data, message: 'Internal server error'};
    }
  } catch (error) {
    console.log("error...",error)
    return {success: false, data: null, message: error?.message};
  }
};
