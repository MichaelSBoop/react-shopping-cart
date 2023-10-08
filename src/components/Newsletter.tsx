import { Button, Col, Row } from "react-bootstrap";

export function Newsletter() {
  return (
    <div
      className="h-25 px-3 py-4 mx-auto my-3 rounded card"
      style={{ background: "#fff" }}
    >
      <Row>
        <Col xl={8} lg={7} md={12}>
          <h2>Want to be the first to know about our new products?</h2>
          <p className="fs-4 mb-2">Sign up to our newsletter!</p>
        </Col>
        <Col xl={4} lg={5} md={12}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-100 mt-2 mb-4 p-2 fs-5"
          />
          <Button style={{ width: "200px" }}>Subscribe</Button>
        </Col>
      </Row>
    </div>
  );
}
