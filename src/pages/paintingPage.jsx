import React from "react";
import { useParams } from "react-router-dom";
import paintings from "../data/paintings.json";
import PaintingDetails from "../components/paintingsDetails/PaintingsDetails";

export default function PaintingPage() {
  const { id } = useParams();
  const painting = paintings.find((p) => p.id === id);

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <>
      <PaintingDetails painting={painting} />
    </>
  );
}
