import React from "react";
import { Container, Grid } from "@mui/material";

import { Navbar } from "../components/Navbar";
import { ShopItemGalleryCard } from "../components/ShopItemGalleryCard";

import { useContext } from "react";
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
              <Grid key={item._id} item xs={12} md={4}>
                <ShopItemGalleryCard
                  item={item}
                  key={item._id}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}