import { Outlet } from "react-router-dom";
import { StoreHeader } from "../components/StoreHeader";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <StoreHeader />
      <Outlet />
    </>
  );
}
