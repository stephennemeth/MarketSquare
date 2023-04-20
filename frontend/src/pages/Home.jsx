import React, { useState, createContext } from "react";
import { Navbar } from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { ShopItemGalleryCard } from "../components/ShopItemGalleryCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import axios from "axios";

const API_URL = "http://localhost:8082/api";

export default function Home() {

  const fetchAllShopItems = async () => {
    const { receivedItems } = await axios.get(API_URL + "/items");
    console.log("Received items: ", receivedItems)
    return receivedItems;
  };

  const { allShopItems, isLoading } = useQuery("allShopItems", fetchAllShopItems);


  // itemsContext.deleteItem(item) = () => {
  //   // axios.delete(API_URL + "/items/" + item.id).then((res) => {....
    
  // }
  // itemsContext.createItem(item)
  // itemsContext.putItem(item)


  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar />
      <main>
        <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            {allShopItems?.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
                <ShopItemGalleryCard
                  item={item}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}