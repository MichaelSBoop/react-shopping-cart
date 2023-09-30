import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface SearchbarItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export function SearchbarItem({ id, name, price, imgUrl }: SearchbarItemProps) {
  const { increaseItemQuantity } = useShoppingCart();
  return (
    <>
      <Stack
        className="d-flex align-items-center my-2 z-index-2"
        direction="horizontal"
        gap={2}
      >
        <img
          src={imgUrl}
          style={{ width: "100px", height: "50px", objectFit: "cover" }}
        />
        <div style={{ minWidth: "50px" }}>
          <div className="text-capitalize">{name}</div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(price)}
          </div>
        </div>
        <Button size="sm" onClick={() => increaseItemQuantity(id)}>
          Add To Cart
        </Button>
      </Stack>
    </>
  );
}
