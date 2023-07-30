import db from "../connect/db_connect"

import HomeLayout from "../layouts/HomeLayout"
import ListScores from "./ListScores"

const Home = () => {
  console.log(db.find())

  return (
    <HomeLayout>
      <h2>Home</h2>
      <ListScores />
    </HomeLayout>
  )
}
export default Home
