import profilePhoto from "../../images/profile-image.png";

const Profile = () => {
  return (
    <heading className="profile-section">
      <img className="profile-image" src={profilePhoto} alt="profile-photo" />

      <div className="profile-details">
        <div className="name">Syed Ali N</div>

        <div className="position">Frontend Developer</div>
        <a href="#" className="website">
          syedali.website
        </a>

        <div>
          <button className="email-btn">
            <i class="fa-solid fa-envelope"></i>Email
          </button>
        </div>
      </div>
    </heading>
  );
};

export default Profile;
