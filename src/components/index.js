import './index.css'

const UserProfile = props => {
  const {UserDetails} = props
  const {imageUrl, name, role} = UserDetails
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-desgination">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
