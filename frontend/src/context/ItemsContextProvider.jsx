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