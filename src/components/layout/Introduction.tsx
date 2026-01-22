import { TypeAnimation } from "react-type-animation";

function Introduction() {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-text-container">
          <h1 className="name">
            <span className="name-black">Hello, I'm </span>
            <TypeAnimation
              sequence={[
                "Donovan!",
                1500,
                "a Software Engineer!",
                1500,
                "a Web Developer!",
                1500,
                "a Mobile Developer!",
                1500,
                "a Coding Tutor!",
                1500,
                "a Hooper!",
                1500,
                "a Boba Connoisseur!",
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="name-color"
              repeat={Infinity}
            />
          </h1>
          <p className="description">
            I'm currently at UC Irvine studying Computer Science with an
            interest in Full-Stack Development and Intelligent Systems.
          </p>
        </div>
        {/* image container */}
        <div className="intro-img-container">
          <img src="/portfolio/headshot.jpg" alt="Donovan Chen" width="500" />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
