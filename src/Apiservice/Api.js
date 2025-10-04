import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";


export const getAllProducts = async() => {

const response =await axios.get(`${BASE_URL}/products`)

return response.data    
};


export const getProductCategory = async(id) => {

const response =await axios.get(`${BASE_URL}/categories`)

return response.data    
};

