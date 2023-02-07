import React from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";

function About() {
  return (
    <HeadProvider>
      <div className="Home">
        <Title>About Me</Title>
        <Link rel="canonical" href="https://yo1nk.github.io/challenge-2/" />
        <Meta name="example" content="whatever" />
      </div>
    </HeadProvider>
  );
}

export default About;