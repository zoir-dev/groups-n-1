import "./about.scss";
import { LogoAbout } from "../../components/things-about/headA/head-a";
import { JobA } from "../../components/things-about/jobA/jobA";
import { End } from "../../components/things-about/endA/endA";
const About = () => {
  return (
    <div className="container about_div">
      <div className="head">
        <LogoAbout />
      </div>
      <div className="section">
        <JobA />
      </div>
      <div className="end">
        <End />
      </div>
    </div>
  );
};

export default About;
