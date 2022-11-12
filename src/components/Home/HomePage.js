import greetVid from "../../assets/greet-vid.mp4";
const HomePage = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop>
        <source src={greetVid} type="video/mp4"></source>
      </video>
      <div className="home-content">
        <div className="content-title">There's a better way to ask</div>
        <div className="content-body">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead-and make everyone happy.
        </div>
        <div>
          <button className="content-button">Get's started. It's free.</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
