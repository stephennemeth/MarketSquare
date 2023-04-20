import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { ShopItemGalleryCard } from "../components/ShopItemGalleryCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import axios from "axios";

const API_URL = "http://localhost:8082/api";

export default function Home({ authState, setDarkMode, setAuthState }) {

  const [isLoading, setIsLoading] = useState(true);
  const [itemsData, setItemsData] = useState([]);

  const receiveItems = (receivedItems) => {
    console.log("Received items: ", receivedItems)
    setItemsData(receivedItems);
    setIsLoading(false);
  };

  // Get all items from backend // TODO is constantly reloading
  axios.get(API_URL + "/items").then((res) => {
    receiveItems(res.data);
  });

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar setDarkMode={setDarkMode} authState={authState} setAuthState={setAuthState} />
      <main>
        <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            {itemsData?.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
                <ShopItemGalleryCard
                  itemsData={itemsData}
                  setItemsData={setItemsData}
                  item={item}
                  authState={authState}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}