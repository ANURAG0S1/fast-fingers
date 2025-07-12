import Welcome from "../components/welcomePage/Welcome"
import PropTypes from "prop-types";

function HomePage({user,changeUser}) {
  return (
    <div className="home-page">
      <Welcome 
        user={user}
        changeUser={changeUser}
      />
    </div>
  )
}

HomePage.propTypes = {
  user: PropTypes.any,
  changeUser: PropTypes.func.isRequired
};

export default HomePage
