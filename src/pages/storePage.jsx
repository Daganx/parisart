import React from "react";
import BannerStore from "../components/bannerStore/bannerStore";
import Gallery from "../components/gallery/Gallery";

export default function StorePage() {
  return (
    <>
      <BannerStore />
      <section className="products">
        <p>PRODUCTS</p>
      </section>
      <Gallery />
    </>
  );
}
