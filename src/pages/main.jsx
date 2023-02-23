
// header
import Header from "../components/header";
import SideBar from "../components/sidebar";

// All routes
import AppRoutes from "./routes";

export default function Main() {
  return (
    <section className="section theme-bg wrapper">
      <Header />
      <div className="content-section position-relative d-flex">
        <SideBar />
        <div className="content w-100">
          <AppRoutes />
        </div>
      </div>
    </section>
  );
}
