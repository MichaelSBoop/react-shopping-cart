import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Cookware } from "./pages/Cookware";
import { Electronics } from "./pages/Electronics";
import { Furniture } from "./pages/Furniture";
import { General } from "./pages/General";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="store" element={<Store />}>
            <Route index element={<General />} />
            <Route path="cookware" element={<Cookware />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="furniture" element={<Furniture />} />
            {/* <Route path="*" element={<Navigate to="general" replace/>} /> */}
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
        <Newsletter />
      </Container>
      {/* <Footer /> */}
    </ShoppingCartProvider>
  );
}

export default App;
