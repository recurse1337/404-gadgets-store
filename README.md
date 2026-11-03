# 404 Gadgets

An online store of phones, tablets and accessories with a catalog, product pages, a shopping cart and favorites. Built by **Team 404 Found**.

[**Live demo**](<https://recurse1337.github.io/404-gadgets-store/>)

## Features

- **Home page** with a banner slider, "Brand new models" and "Hot prices" sliders and a "Shop by category" block
- **Catalog** for phones, tablets and accessories with sorting and pagination saved in the URL
- **Search** in the header with suggestions
- **Product details** with color and capacity switching, image gallery, tech specs and "You may also like"
- **Shopping cart** with quantity controls, automatic totals and a checkout modal
- **Favorites** with a "Clear all" button
- **Light and dark theme**
- **Empty and error states** with illustrations: empty cart, empty favorites, 404 page and product not found
- Cart and favorites are saved in `localStorage`
- Pixel hearts effect and sounds for cart and favorite actions

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)
- React Context API for cart, favorites and compare state
- SCSS modules
- [Swiper](https://swiperjs.com/) for sliders
- [classnames](https://github.com/JedWatson/classnames)
- Web Animations API and HTML5 Audio for effects and sounds
- ESLint, Stylelint and Prettier

## Getting started

```bash
git clone https://github.com/recurse1337/404-gadgets-store.git
cd 404-gadgets-store
npm install
npm start
```

## Project structure

```
public/
├── api/             # product data (JSON)
└── img/             # images, banners, icons
src/
├── components/      # shared components (Header, Footer, ProductCard, ...)
├── context/         # Cart and Favorites contexts
├── modules/         # Home, Catalog, ProductDetails, Cart, Favorites, NotFound
├── styles/          # variables, mixins, global styles and theme
└── types/           # TypeScript types
```


## Credits

Product images and data are provided by Mate Academy for educational purposes.
