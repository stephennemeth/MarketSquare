import { createContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { LoadingSkeleton } from "../components/LoadingSkeleton";

export const ItemsContext = createContext({});

const API_URL = "http://localhost:8082/api";

export const ItemsContextProvider = ({ children }) => {

  const fetchAllShopItems = async () => {
    const answer = await axios.get(API_URL + "/items");
    console.log("Received items in ItemsContextProvider: ", answer.data)
    return answer.data;
  };

  const { data, isLoading } = useQuery("allShopItems", fetchAllShopItems); // TODO Check whether it is constantly fetching
  const allShopItems = data;

  const getAllItems = () => {
    return allShopItems;
  }

  const deleteItem = (item) => {
    axios.delete(API_URL + `/items/${item._id}`)
    .then((res) =>{
      window.location.reload();
    } )
    .catch((err) => console.log('Error form EditItemd_deleteClick'))
    // TODO Zack: implement delete item
  }

  const createItem = (item) => {
    axios.post(API_URL + `/items/`,item)
    .then((res => {
      window.location.reload();
    }))
    .catch((err) => {
      console.log('Error in CreateItem!')
    })
  }

  const putItem = (item, data) => {
    axios.put(API_URL + `/items/${item._id}`, data)
    .then((res) =>{
      window.location.reload();
    } )
    .catch((err) => console.log('Error form EditItemd_SubmitClick'))
  }

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
      <ItemsContext.Provider value={{ getAllItems, deleteItem, createItem, putItem }}>
        {children}
      </ItemsContext.Provider>
  );
};