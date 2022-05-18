import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings d-flex">
      <div className="settingsWrapper">
        <div className="d-flex justify-content-center align-items-center">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="d-flex flex-column">
          <label>Profile Picture</label>
          <div className="settingsPP d-flex align-items-center">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon d-flex justify-content-center align-item-center cursor far fa-user-circle" />{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="EngGer" name="name" />
          <label>Email</label>
          <input type="email" placeholder="duclapulga@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button
            className="settingsSubmitButton d-flex justify-content-center align-items-center cursor"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
