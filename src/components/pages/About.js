import React from 'react';
import profilePic from "../../assets/images/profilepic.jpg";

//This component returns the div that contains all of the content for the About Me portion of the site.
const About = () => (
    <section>
        <h2 className="section-header">About Me</h2>
        <img src={profilePic} alt="Joe Lawton" />
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
            ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. 
            Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
            diam, sit amet facilisis lectus blandit at.
        </p>
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
            ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. 
            Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
            diam, sit amet facilisis lectus blandit at.
        </p>
        <p>
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
            ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. 
            Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
            diam, sit amet facilisis lectus blandit at.
        </p>
    </section>
);

export default About;