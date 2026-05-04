import Slideshow from "../components/Slideshow";

const imageModules = import.meta.glob("/public/about/film/*", {
    eager: true,
    query: "?url",
    import: "default",
});
const aboutImages = Object.values(imageModules) as string[];

function About() {
    return (
        <div className="About">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="profile-images">
                    <img src="/portfolio/about/me_purin.jpg" alt="purin" />
                    <img src="/portfolio/about/me_source.jpg" alt="source" />
                    <img src="/portfolio/about/me_market.jpg" alt="market" />
                </div>
                <div className="about-text">
                    <p>
                        My name is Donovan Chen and I'm an incoming graduate
                        from the University of California, Irvine, where I
                        study Computer Science with a specialization in
                        Intelligent Systems. I was born and raised in
                        Sacramento, CA. I previously interned at{" "}
                        <a href="https://smyze.cn/">Smyze</a> as a software
                        engineer.
                    </p>
                    <p>
                        As a software engineer, I want to build new features
                        that people actually use with good system design and
                        engineering practices. I'm open to new growth
                        opportunities that will allow me to reach large
                        audiences and to lead feature development.
                    </p>
                    <p>
                        Outside of professional interests, you can find me
                        watching movies, reading memoirs, playing basketball
                        with my friends, sipping on boba, cafe hopping, and even
                        shooting film photography!! ⬇️
                    </p>
                </div>
            </div>
            <Slideshow images={aboutImages} alt="About me photo" />
        </div>
    );
}

export default About;
