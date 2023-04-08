import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { ShopItemGalleryCard } from "../components/ShopItemGalleryCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";

  // TEMP for testing.
  // TODO Remove
  const ITEMS = [
    {
      id: 1,
      slug: "gopro-hero-black-11",
      name: "GoPro Hero Black 11",
      description: "An action camera",
      price: 399.99,
      thumbnail_url: "https://bgr.com/wp-content/uploads/2022/09/gopro-hero11-black-1.jpg?quality=82&strip=all",
      condtition: "New",
      owner: "John Doe",
    },
    {
      id: 2,
      name: "iPhone 13 Pro Max",
      description: "A smartphone",
    },
  ];

export default function Home(authState, setDarkMode) {

  const [isLoading, setIsLoading] = useState(true);
  const [itemsData, setItemsData] = useState([]);

  const receiveItems = (receivedItems) => {
    setItemsData(receivedItems);
    setIsLoading(false);
  };

  // TODO: Make request to backend to get items
  // Temp for now: use ITEMS
  setTimeout(() => {
    receiveItems(ITEMS);
  }, 2000);

  return isLoading ? (
    <LoadingSkeleton />
  ) : (
    <>
      <Navbar setDarkMode={setDarkMode} authState={authState} />
      <main>
        <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            {itemsData?.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
                <ShopItemGalleryCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}