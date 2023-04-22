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

  const { data, isLoading } = useQuery("allShopItems", fetchAllShopItems);
  const allShopItems = data;

  const getAllItems = () => {
    return allShopItems;
  }

  const deleteItem = (item) => {
    axios.delete(API_URL + `/items/${item._id}`)
    .then()
    .catch((err) => console.log('Error form EditItemd_deleteClick'))
  }

  const createItem = (item) => {
    axios.post(API_URL + `/items/`,item)
    .then()
    .catch((err) => {
      console.log('Error in CreateItem!')
    })
  }

  const putItem = (item, data) => {
    axios.put(API_URL + `/items/${item._id}`, data)
    .then()
    .catch((err) => console.log('Error form EditItem_SubmitClick'))
  }

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
      <ItemsContext.Provider value={{ getAllItems, deleteItem, createItem, putItem }}>
        {children}
      </ItemsContext.Provider>
  );
};