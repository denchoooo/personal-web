import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../../components/Article/Article';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container-about">
        <h1 className="about-heading">Things I Do</h1>
        <Article title="Front End Development">
          Front End Development is building the visual things or mostly
          everything that you can see on a website. I use HTML, CSS, and
          Javascript frameworks to make a high quality responsive website or
          single-page apps.
          <br />
          <br />
          I use <strong>React</strong> as my Javascript framework using the
          approach of component-based architecture. When complex state
          management are in need, <strong>Redux</strong> is my current way to
          go. I can say that I am confident in my React and Redux skill, but
          that doesn’t make me stop learning about React, Redux, or other modern
          Javascript technologies everyday.
          <br />
          <br />
          On the styling side, I can work with or without CSS frameworks. I am
          also currently trying to put <strong>Sass</strong> into my web
          development toolbox. On top of that, I am also learning web graphics
          and other interactive experiences using <strong>p5.js</strong> and{' '}
          <strong>Matter.js</strong> to make things more fun!
        </Article>
        <Article title="Web Design">
          Web Design is about planning and iterating UI or UX of a website.
          Structure and layout are designed first before the actual development
          on the front end begin. Knowledge on both design and development are
          needed to ensure a beautiful and realistic design of a website.
          <br />
          <br />
          I did most of my web designing works using <strong>Sketch</strong>.
          When more advanced graphics are needed <strong>Illustrator</strong> or{' '}
          <strong>Photoshop</strong> can be used for the needs.
        </Article>
        <h1 className="about-heading">Me</h1>
        <Article>
          My name is Deni Cho. I live in Indonesia, and currently a university
          student in Universitas Atma Jaya Yogyakarta learning Informatics
          Engineering. I have been passionate about computer since I was a
          child, mostly playing games. I really want to be a game developer
          since I was in high school, hence I learned programming. I started
          learning programming with C# and Java, and also used it to make some
          small paid projects. Being a game developer in Indonesia is very hard,
          so I am learning web development instead, and it became interesting
          really quick.
          <br />
          <br />
          I have been learning web development and design for roughly 6 months
          now. I am an ambitious learner and have a huge passion in web
          development. I love learning everything and currently accepting
          freelance work to hone my skills for even more.
        </Article>
      </div>
    );
  }
}

About.propTypes = {};

export default About;
