import headshot from "../../../public/headshot.jpg";

function Introduction() {
  return (
    <section className="introduction">
      <h1>Donovan Chen</h1>
      <div>
        <p>
          Computer Science Hello! My name is Donovan. I am a fourth-year UC
          Irvine student pursuing a B.S in Computer Science with a
          specialization in Intelligent Systems! I have a strong interest in
          full-stack development, enjoying the challenge that comes along with
          it. I am driven by a desire for continuous learning, and I am always
          seeking new opportunities to refine my skills. Outside of my
          professional interests, you can find me getting boba, playing
          basketball, or even with my film camera taking pictures!
        </p>

        <img src={headshot} alt="Donovan Chen" width="500" />
      </div>

      <div>
        <button className="button">
          <a href="https://github.com/DonChenn" target="_blank">
            {" "}
            GitHub
          </a>
        </button>

        <button className="button">
          <a href="https://www.linkedin.com/in/donovan-chen" target="_blank">
            {" "}
            LinkedIn
          </a>
        </button>
      </div>
    </section>
  );
}

export default Introduction;
