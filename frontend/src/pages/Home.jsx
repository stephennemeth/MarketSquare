import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import { ShopItemGalleryCard } from "../components/ShopItemGalleryCard";
import { LoadingSkeleton } from "../components/LoadingSkeleton";

// TEMP for testing.
// TODO Remove
let tempItems = [
  {
    id: 1,
    slug: "gopro-hero-black-11",
    name: "GoPro Hero Black 11",
    description: "An action camera",
    price: 399.99,
    condtition: "New",
    owner: "John Doe",
    thumbnail_url: "https://bgr.com/wp-content/uploads/2022/09/gopro-hero11-black-1.jpg?quality=82&strip=all",
  },
  {
    id: 2,
    slug: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    description: "A smartphone",
    price: 1099.99,
    condtition: "New",
    owner: "Alice Appleseed",
    thumbnail_url: "https://m-cdn.phonearena.com/images/article/130912-wide-two_1600/Apples-iPhone-13-5G-is-still-on-track-for-a-September-release.jpg"
  },
  {
    id: 3,
    slug: "macbook-pro-2021",
    name: "MacBook Pro 2021",
    description: "A laptop",
    price: 1999.99,
    condtition: "New",
    owner: "Bob Bobson",
    thumbnail_url: "https://cyberianstech.com/wp-content/uploads/2021/06/MacBook-Pro-14-inch-in-2021.jpg"
  },
  {
    id: 4,
    name: "JBL Headphones",
    description: "A pair of headphones",
  },
  {
    id: 5,
    name: "Samsung Galaxy S21",
    description: "A smartphone",
  },
  {
    id: 6,
    name: "Dell XPS 15",
    description: "A laptop",
  },
  {
    id: 7,
    name: "Samsung Galaxy S21",
    description: "A smartphone",
  }

];

export default function Home({authState, setDarkMode, setAuthState}) {
  const [ITEMS, setITEMS] = useState([
    {
      id: 1,
      slug: "gopro-hero-black-11",
      name: "GoPro Hero Black 11",
      description: "An action camera",
      price: 399.99,
      condtition: "New",
      owner: "John Doe",
      thumbnail_url: "https://bgr.com/wp-content/uploads/2022/09/gopro-hero11-black-1.jpg?quality=82&strip=all",
    },
    {
      id: 2,
      slug: "iphone-13-pro-max",
      name: "iPhone 13 Pro Max",
      description: "A smartphone",
      price: 1099.99,
      condtition: "New",
      owner: "Alice Appleseed",
      thumbnail_url: "https://m-cdn.phonearena.com/images/article/130912-wide-two_1600/Apples-iPhone-13-5G-is-still-on-track-for-a-September-release.jpg"
    },
    {
      id: 3,
      slug: "macbook-pro-2021",
      name: "MacBook Pro 2021",
      description: "A laptop",
      price: 1999.99,
      condtition: "New",
      owner: "Bob Bobson",
      thumbnail_url: "https://cyberianstech.com/wp-content/uploads/2021/06/MacBook-Pro-14-inch-in-2021.jpg"
    },
    {
      id: 4,
      name: "JBL Headphones",
      description: "A pair of headphones",
    },
    {
      id: 5,
      name: "Samsung Galaxy S21",
      description: "A smartphone",
    },
    {
      id: 6,
      name: "Dell XPS 15",
      description: "A laptop",
    },
    {
      id: 7,
      name: "Samsung Galaxy S21",
      description: "A smartphone",
    }

  ]);
  
  let   [myItems, setPush] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [itemsData, setItemsData] = useState([]);
  myItems = ITEMS;
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
      <Navbar ITEMS = {ITEMS} myItems = {myItems} setPush = {setPush} setDarkMode={setDarkMode} authState={authState} setAuthState={setAuthState} />
      <main>
        <Container maxWidth={"lg"} sx={{ marginTop: 3 }}>
          <Grid container spacing={2}>
            {itemsData?.map((item) => (
              <Grid key={item.id} item xs={12} md={4}>
                <ShopItemGalleryCard setITEMS = {setITEMS} myItems = {myItems} setPush = {setPush} itemsData = {itemsData} setItemsData = {setItemsData} item={item} authState={authState} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}