import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="p-6">{children}</div>
    </>
  );
}

export default MainLayout;