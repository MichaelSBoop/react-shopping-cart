# 🛒Shopping Cart Website using React

A small project that allows user to manipulate items in the shopping cart

## Tech used

- This website is build with **React + Typescript** using **Vite** template
- **react-router-dom** is set up to allow page navigation (although pages like _Home_ and _About_ are not yet complete due to project focus)
- **React Bootstrap** is implemented to provide styling and certain premade components
- Data is pulled from a single JSON file for convenience (idea of adding different data source is not off the table)

## Features

Website functionality is provided by these features:

- Cart operations are implemented using **ShoppingCartContext** which allows user to add, increase and remove items from cart from multiple places on page
- Searchbar allows user to find needed items. It is also enhanced with custom **useDebounce** to preemptively optimise the search if we need to fetch data from a different source instead of a JSON file
- **useLocalStorage** custom hook is in place to save changes user makes in cart when he exits the website
- **react-router** is set up not only to traverse website pages, but also to find specific groups of items in store

## How to open

The project is set up using Vite, so if you want to clone it and play around, the commands are pretty much default

---

Right now the projects main goal is reached, but I would like to work on certain aspects of it's presentation.  
If you have any ideas about how to improve this project, feel free to express your opinion any way you like!
