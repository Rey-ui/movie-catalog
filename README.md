# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🎬 Backstage — Movie Catalog

A modern movie catalog built with React, featuring trending movies, search, and detailed film information.

🔗 [Live Demo](https://movie-catalog-silk.vercel.app/)

## Features

- Trending movies by day or week
- Search movies by title
- Detailed movie page with genres, overview, rating, and countries
- Cast and reviews via nested routes
- Load more pagination
- Alphabetical sorting
- Fully responsive design

## Tech Stack

- React 18
- React Router DOM v6
- Axios
- Formik + Yup
- CSS Modules
- React Hot Toast
- React Icons
- Vite

## Getting Started

1. Clone the repository
2. Create `.env` file with your TMDB token:
