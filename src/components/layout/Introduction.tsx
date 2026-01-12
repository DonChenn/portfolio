function Introduction() {
  return (
    <section className="intro">
      <div className="intro-container">
        {/* content */}
        <div className="intro-text-container">
          <h1 className="name">
            <span className="name-black">Hello, I'm </span>
            <span className="name-color">Donovan!</span>
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
