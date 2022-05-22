import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./sidebar.css";
export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://photo-cms-sggp.zadn.vn/w580/Uploaded/2022/dqmbbcvo/2022_01_20/lionelmessi_pzli.jpeg"
          alt=""
        />
        <p>Ronaldo cũng có tuổi ấy nhưng mà tuổi con ngan con. ok ?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Link
            to={{ pathname: "https://www.facebook.com/duclapulga/" }}
            target="_blank"
            style={{ color: "rgb(90, 146, 197)" }}
          >
            <i className="sidebarIcon fab fa-facebook-square" />
          </Link>
          <i className="sidebarIcon fab fa-instagram-square" />
          <i className="sidebarIcon fab fa-pinterest-square" />
          <i className="sidebarIcon fab fa-twitter-square" />
        </div>
      </div>
    </div>
  );
}
