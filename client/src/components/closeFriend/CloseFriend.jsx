import "./closeFriend.css";

export default function CloseFriend({ user }) {
  const PF = "https://connect-with-me-7a6t.onrender.com/images/";
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
