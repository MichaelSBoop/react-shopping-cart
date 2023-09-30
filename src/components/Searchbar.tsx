import { Form, InputGroup } from "react-bootstrap";
import { useDebounce } from "../hooks/useDebounce";
import { ChangeEvent, useState } from "react";
import { SearchbarItem } from "./SearchbarItem";
import storeItems from "../data/items.json";

export function Searchbar() {
  const filteredItems = storeItems;
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce(search, 100);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <main className="position-relative">
      <InputGroup className="mb-3 w-100 z-index-0">
        <Form.Control
          value={search}
          placeholder="Search for items..."
          onChange={handleChange}
        />
        {search === "" ? null : (
          <div
            className="position-absolute top-100 start-0 w-100 p-2 bg-white"
            style={{ zIndex: 5, borderRadius: ".375rem" }}
          >
            {filteredItems
              .filter((item) =>
                item.name.includes(debouncedValue.toLowerCase())
              )
              .map((item) => (
                <SearchbarItem key={item.id} {...item}></SearchbarItem>
              ))}
          </div>
        )}
      </InputGroup>
    </main>
  );
}
