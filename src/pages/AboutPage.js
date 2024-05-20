import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './AboutPage.css'; // Optional: If you want to add styles
import VerticalImage from '../assets/images/placeholder-vertical.png'; // Ensure this path is correct

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-main">
        <div className="left-column">
          <h1>About Us</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, ante vel porta pellentesque, nisi ipsum gravida lectus, vitae laoreet odio turpis quis orci. Duis eu congue tellus. Donec sodales aliquam mattis. Donec at ex malesuada, imperdiet nulla euismod, luctus turpis. Etiam ac consequat orci, placerat luctus libero. Vestibulum sit amet molestie lorem. Suspendisse faucibus ligula ut gravida finibus. Aliquam vehicula quam at convallis interdum. Vestibulum eu consectetur enim, sit amet accumsan nisl. Etiam gravida, lacus at vestibulum tincidunt, nunc nunc vehicula magna, sed tristique magna elit vel sem. Suspendisse sodales vel lorem in consectetur. Phasellus neque nisl, scelerisque nec arcu nec, venenatis pellentesque mi. Morbi non felis volutpat, commodo ligula nec, ornare diam. Aliquam eleifend finibus ante, a varius nunc tempus vitae. Donec sagittis nisl quis lectus ullamcorper, nec pretium dui aliquet.
          </p>
          <p>
          Ut tortor metus, viverra et viverra in, fringilla suscipit purus. Curabitur lacinia pretium consectetur. Mauris nec eleifend lacus, at finibus felis. Cras consectetur massa massa, eu scelerisque ante pulvinar ac. Donec et sapien posuere, eleifend erat non, aliquet nulla. Donec erat velit, faucibus elementum mollis eget, ultricies eu ante. Nunc varius, sem tempus euismod imperdiet, libero velit faucibus metus, in luctus enim massa lobortis lectus. In lobortis est a orci gravida, quis pellentesque quam ultricies.
          </p>
        </div>
        <div className="right-column">
          <img src={VerticalImage} alt="Company" className="vertical-image" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
