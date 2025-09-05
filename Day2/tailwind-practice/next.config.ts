import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // Chapter 8
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //   ],
  // },

  // Chapter 10 - ProductList
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "fakestoreapi.com",
  //     },
  //   ],
  // },

  // Chapter 10 - NavigationBar
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "fakestoreapi.com",
  //     },
  //   ],
  // },

  // Chapter 15 - UnsplashPinterest
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "plus.unsplash.com",
  //     },
  //   ],
  // },

  // Chapter 16 - ShoppingMallProductList
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;