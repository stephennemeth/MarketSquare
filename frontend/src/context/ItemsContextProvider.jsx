import { createContext } from "react";
import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";

import { LoadingSkeleton } from "../components/LoadingSkeleton";

export const ItemsContext = createContext({});

const API_URL = "http://localhost:8082/api";

export const ItemsContextProvider = ({ children }) => {
  

  const fetchAllShopItems = async () => {
    const answer = await axios.get(API_URL + "/items");
    console.log("Received items in ItemsContextProvider: ", answer.data)
    setAllShopItems(answer.data);
    return answer.data;
  };

  const getAllItems = () => {
    return allShopItems;
  }

  const deleteItem = (item) => {
    axios.delete(API_URL + `/items/${item._id}`, {headers : {token : localStorage.getItem("token")}})
      .then(() => {
        setAllShopItems(allShopItems.filter((i) => i._id !== item._id));
        console.log("Deleted item: ", item)

      })
      .catch((err) => console.log('Error form EditItemd_deleteClick'))
  }

  const createItem = (item) => {
    axios.post(API_URL + `/items/`, item, {headers : {token : localStorage.getItem("token")}})
      .then((res) => {
        item._id = res.data._id;
        setAllShopItems([...allShopItems, item]);
        console.log("Created item: ", item, res);
        fetchAllShopItems();
      })
      .catch((err) => {
        console.log('Error in CreateItem!')
      })
  }

  const putItem = (item) => {
    axios.put(API_URL + `/items/${item._id}`, item, {headers : {token : localStorage.getItem("token")}})
      .then(() => {
        setAllShopItems(allShopItems.map((i) => i._id === item._id ? item : i));
        console.log("Updated item: ", item)
      })
      .catch((err) => console.log('Error form EditItem_SubmitClick'))
  }

  const [allShopItems, setAllShopItems] = useState([]);

  const { isLoading } = useQuery("allShopItems", fetchAllShopItems);


  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <ItemsContext.Provider value={{ getAllItems, deleteItem, createItem, putItem }}>
      {children}
    </ItemsContext.Provider>
  );
};