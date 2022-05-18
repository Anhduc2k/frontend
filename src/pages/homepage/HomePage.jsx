import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/SideBar";
// import Posts from "../../components/posts/Posts";

export default function Homepage() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="d-flex">
        {/* <Posts /> */}
        <Sidebar />
      </div>
    </>
  );
}
