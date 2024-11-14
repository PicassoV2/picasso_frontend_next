import { useState } from "react";

// This function runs server-side to fetch the gallery data from the API
export async function getServerSideProps() {
  const res = await fetch("https://paintingauctionbackend-production.up.railway.app/api/listgallerypaintings/");
  const paintingsData = await res.json();

  return { props: { paintingsData } };
}

export default function Gallery({ paintingsData }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(paintingsData.map((painting) => painting.category))];

  const filteredPaintings =
    selectedCategory === "All"
      ? paintingsData
      : paintingsData.filter((painting) => painting.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Painting Gallery</h1>
      <p className="text-center mb-10 text-gray-400">
        Explore our collection of diverse artwork. Select a category to filter.
      </p>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredPaintings.map((painting) => (
          <div
            key={painting.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            <img
              src={painting.image}
              alt={painting.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{painting.title}</h3>
              <p className="text-gray-400">{painting.description}</p>
              <p className="text-sm text-blue-500 mt-2">{painting.category}</p>
              <p className="text-sm text-gray-500 mt-2">By: {painting.profile.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
