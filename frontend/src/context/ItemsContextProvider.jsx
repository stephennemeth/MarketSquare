import { createContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { LoadingSkeleton } from "../components/LoadingSkeleton";

export const ItemsContext = createContext({});

const API_URL = "http://localhost:8082/api";

export const ItemsContextProvider = ({ children }) => {

  const fetchAllShopItems = async () => {
    const { receivedItems } = await axios.get(API_URL + "/items");
    console.log("Received items: ", receivedItems)
    return receivedItems;
  };

  const { allShopItems, isLoading } = useQuery("allShopItems", fetchAllShopItems); // TODO Check whether it is constantly fetching

  const getAllItems = () => {
    return allShopItems;
  }

  const deleteItem = (item) => {
    // TODO Zack: implement delete item
  }

  const createItem = (item) => {
    // TODO Zack: implement create item
  }

  const putItem = (item) => {
    // TODO Zack: implement put item
  }

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <ItemsContext.Provider value={{ getAllItems, deleteItem, createItem, putItem }}> 
      {children}
    </ItemsContext.Provider>
  );
};