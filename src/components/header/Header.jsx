import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles d-flex flex-column align-items-center">
        <span className="headerTitleSm">React Blog App</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://j03qukjhr2obj.vcdn.cloud/image-upload/b43219d6-6444-4ca0-b136-7830a84a04aa.jpg"
        alt=""
      />
    </div>
  );
}
