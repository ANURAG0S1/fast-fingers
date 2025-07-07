import Welcome from "../components/welcomePage/Welcome"

function HomePage({user,changeUser,changeLoginState}) {
  return (
    <div className="home-page">
      <Welcome 
        user={user}
        changeUser={changeUser}
        changeLoginState={changeLoginState}
      />
    </div>
  )
}

export default HomePage
