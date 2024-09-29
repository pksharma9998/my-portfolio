import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { CONFIG } from "../../config";
import { PLAYING_GAMES, MUSIC_LISTENING, TRAVELLING, SOFT_DEPT } from "../../constant";

function AboutCard() {
  const interestItems = [PLAYING_GAMES, MUSIC_LISTENING, TRAVELLING, SOFT_DEPT];
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">{CONFIG.LOWER_NAME} </span>
            from <span className="purple"> {CONFIG.LOCATION}</span>
            <br />
            {CONFIG.ABOUT1}
            <br />
            {CONFIG.ABOUT2}
            <br />
            <br />
            {CONFIG.ABOUT3}
          </p>
          <ul>
            {interestItems?.map((item, index) => <li className="about-activity" key={index}><ImPointRight /> {item} </li>)}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
