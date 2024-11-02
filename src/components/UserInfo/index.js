// Write your JS code here
import './index.css'

const UserInfo = props => {
  return (
    <div className="user-info-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="user-profile-img mb-4"
      />
      <h1 className="user-name mb-4">Wade Warren</h1>
      <p className="user-job-name">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
