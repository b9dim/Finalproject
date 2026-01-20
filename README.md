# Paradise Nursery Shopping Application

## Project Name

**Paradise Nursery - Online Plant Shop**

## Overview

Paradise Nursery is a dynamic web application for an online plant shop that allows users to browse houseplants, view detailed information including images, names, descriptions, and prices, add plants to a shopping cart, and manage cart items. The application features interactive elements such as a navigation bar, dynamically updating cart quantities, and real-time total cost calculations as users add, remove, or adjust item quantities.

## Features

- Browse plants by category
- View plant details (images, names, descriptions, prices)
- Add plants to shopping cart
- Manage cart items (increase/decrease quantity, remove items)
- Dynamic cart icon showing total items
- Real-time total cost calculation
- Responsive navigation bar
- Beautiful landing page with background image

## Technology Stack

- React 18
- Redux Toolkit for state management
- React Router for navigation
- Vite for build tooling

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run dev
```

## Project Structure

- `src/App.jsx` - Main application component with landing page
- `src/App.css` - Styling including background image
- `src/components/ProductList.jsx` - Product listing page
- `src/components/CartItem.jsx` - Shopping cart page
- `src/components/AboutUs.jsx` - About Us page
- `src/components/Navbar.jsx` - Navigation bar component
- `src/store/CartSlice.jsx` - Redux slice for cart management
- `src/store/store.js` - Redux store configuration

## Categories

The application includes plants organized into three main categories:
- Indoor Plants
- Succulents
- Flowering Plants
