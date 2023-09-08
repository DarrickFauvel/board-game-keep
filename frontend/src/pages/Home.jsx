import RecentlyAdded from "../components/RecentlyAdded";

const Home = () => {
  return (
    <div className="home">
      <RecentlyAdded />

      <section id="recently-played">
        <h3>Recently Played</h3>
        <ul>
          <li>game 1</li>
          <li>game 2</li>
          <li>game 3</li>
          <li>etc...</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
