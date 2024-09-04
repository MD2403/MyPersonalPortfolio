import React, { useState, useEffect } from 'react';
import {
  Button, AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia,
  CardContent, CardActions, Box, IconButton,
  TextField,
  InputAdornment
} from '@mui/material';
import { ShoppingCart, Search, Favorite, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Slider from "react-slick"; // Import the carousel library
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const HomePage = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    // Simulating fetching recommended products based on user interaction
    setRecommendedProducts([
      { id: 1, name: "The Icon: Deoderant for Men",image: "https://images.pexels.com/photos/16689203/pexels-photo-16689203/free-photo-of-product-shoot-of-antonio-banderas-the-icon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 2, name: "RayBan Fancy Goggles", image: "https://images.unsplash.com/photo-1642779453406-5345499cf2c7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 3, name: "The Man Company: Trimmers for Men", image: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 4, name: "Recommended Product 4", image: "https://via.placeholder.com/400?text=Recommended+Product+4" },
    ]);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0} className="shadow-md">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" className="font-bold text-blue-600">
            KharidiKaro.com
          </Typography>
          <div className="flex space-x-4">
            {searchVisible ? (
              <TextField
              variant='outlined'
              placeholder='Search...'
              size='small'
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={toggleSearch}>
                      <Close />
                    </IconButton>
                  </InputAdornment> 
                )
              }}
              className='w-64'  />

            ) : (
              <IconButton color="inherit" onClick={toggleSearch}>
                <Search />
              </IconButton>
            )}
            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
            <Button variant="outlined" color="primary" className="font-semibold">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <motion.div 
        className="bg-cover bg-center text-white py-60"
        style={{ backgroundImage: 'url(https://image.adsoftheworld.com/02xqwcubi4qac9pnps7wayyos6g8)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
      </motion.div>

      {/* Personalized Recommendations Section */}
      <Container className="py-10">
        <Typography variant="h4" component="h2" gutterBottom className="font-bold text-center">
          Personalized Recommendations
        </Typography>
        <Slider {...sliderSettings}>
          {recommendedProducts.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Card className="shadow-lg rounded-lg border-none m-4">
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="250"
                  image={product.image}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" className="font-bold text-center">
                    {product.name}
                  </Typography>
                </CardContent>
                <CardActions className="flex justify-between px-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 15, color: '#FF6B6B' }}
                    whileTap={{ scale: 0.8, rotate: -15 }}
                  >
                    <IconButton color="secondary">
                      <Favorite />
                    </IconButton>
                  </motion.div>
                  <Button size="small" variant="outlined" color="primary" className="font-semibold">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Container>

      {/* Promotional Banner */}
      <Container className="my-10">
        <motion.div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" component="h2" className="font-bold">
            Limited Time Offer: 30% Off on All Electronics!
          </Typography>
          <Typography variant="body1" className="mt-2">
            Use code <strong>TECH30</strong> at checkout. Hurry, offer ends soon!
          </Typography>
        </motion.div>
      </Container>

      {/* Categories Section */}
      <Container className="py-10">
        <Typography variant="h4" component="h2" gutterBottom className="font-bold text-center">
          Explore Our Categories
        </Typography>
        <Grid container spacing={4} className="mt-6">
          {['Electronics', 'Fashion', 'Home & Garden', 'Sports & Outdoors'].map((category, index) => (
            <Grid item xs={12} md={3} key={index}>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg border-none">
                  <CardMedia
                    component="img"
                    alt={category}
                    height="200"
                    image={`https://via.placeholder.com/400?text=${category}`}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" className="text-center font-semibold">
                      {category}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Product Showcase */}
      <Container className="py-10 bg-gray-100 rounded-lg">
        <Typography variant="h4" component="h2" gutterBottom className="font-bold text-center">
          Featured Products
        </Typography>
        <Grid container spacing={4} className="mt-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} md={3} key={index}>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Card className="shadow-lg rounded-lg border-none">
                  <CardMedia
                    component="img"
                    alt={`Product ${index + 1}`}
                    height="250"
                    image={`https://via.placeholder.com/400?text=Product+${index + 1}`}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" className="font-bold">
                      Product {index + 1}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      A brief description of product {index + 1}.
                    </Typography>
                  </CardContent>
                  <CardActions className="flex justify-between px-4">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 15, color: '#FF6B6B' }}
                      whileTap={{ scale: 0.8, rotate: -15 }}
                    >
                      <IconButton color="secondary">
                        <Favorite />
                      </IconButton>
                    </motion.div>
                    <Button size="small" variant="outlined" color="primary" className="font-semibold">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" className="font-medium">
              © 2024 ShopEase. All rights reserved.
            </Typography>
            <div>
              <Button color="inherit" className="text-sm font-medium">Privacy Policy</Button>
              <Button color="inherit" className="text-sm font-medium">Terms of Service</Button>
            </div>
          </Box>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
