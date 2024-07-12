import { useState } from "react";
import "./searchBar.scss";

const types = ["ຂາຍ", "ໃຫ້ເຊົ່າ"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="ທີ່ຕັ້ງ" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000000000}
          placeholder="ລາຄາຕໍ່າສຸດ"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000000000}
          placeholder="ລາຄາສູງສຸດ"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
