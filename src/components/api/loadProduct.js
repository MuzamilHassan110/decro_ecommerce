import axios from "axios";

export const loadProduct = async(EndPoint) => {
 const response = await axios.get(`https://dummyjson.com/${EndPoint}`)
 return response.data.products;
}