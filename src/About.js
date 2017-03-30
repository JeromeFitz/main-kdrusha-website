import React from 'react';
import './style.css';

export default class About extends React.Component {
  render() {
    return (
       <section className="aboutartist">
          <div className="imageHere"></div>

          <article className="bio">
            <div className="bioTitle">Biography</div>
            <p>KD Rusha is a hip hop artist from San Diego, California. At the age of 17, KD found his knack for music and began to make songs as a hobby. As the year 2012 progressed into 2013, KD found the hobby to become a passion. He released his first project, "Vengeance", in 2012 and it was a little known project that sprawled his high school campus with decent reception.</p>
            <p>Later that year, he released "Throwback", a mixtape that reached the internet with open arms with the major records being "Never Felt the Pain" and "You Already Know" both of which were produced by T-Customz. In 2013, KD saw a growth in his fanbase when he released his next project, "Livelihood". This was the mark of KD finding his own style of music rather than copying his inspirations.</p>
            <p>On December 28, 2013, he released his biggest song to date, "One of These Days" which met the internet as well as the local San Diego </p>
          </article>
       </section>
    );
  }
}
