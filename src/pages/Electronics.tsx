import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Electronics() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems
          .filter((item) => item.group === "electronics")
          .map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
