import "./about.css";
import H1 from "../../img/H1.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={H1} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Discription About me.</p>
        <p className="a-desc">
          I have <b>completed BSCS</b> from DHA SUFFA UNIVERSITY. I
          understanding and working experience of HTML, CSS , tailwaindCss, MUI,
          JavaScript(ES6), <b>React, Node js, sql and mongoDB </b> from
          different platforms like Udemy, Codecademy , Udacity and multiple
          platforms. I am a self learner and currently learning node js. I am
          confident in my skills and I am a hard working student willing to
          learn, work and avail this opportunity. I have done my{" "}
          <b>FYP BASED ON MERN STACK</b> based on peer to peer meetup.
          <br />
          Thanks for your valuable time.
          <br />
          Regards,
          <br />
          HUZAIFA REHMAN
        </p>
      </div>
    </div>
  );
};

export default About;
