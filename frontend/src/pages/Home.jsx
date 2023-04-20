import React, { useState, createContext } from "react";
import { Navbar } from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { ShopItemGalleryCard } from "../components/ShopItemGalleryCard";

import { ItemsContext } from "../context/ItemsContextProvider";

export default function Home() {

  const { getAllItems } = useContext(ItemsContext);

  return (
    <>
      <Navbar />
      <main>
        <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            {getAllItems()?.map((item) => (
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