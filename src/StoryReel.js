import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="./ichat01.jpg"
        profileSrc="./ichat02.jpg"
        title="Ephraim Etuk"
      />
      <Story
        image="./ichat01.jpg"
        profileSrc="./ichat02.jpg"
        title="Tony Lanez"
      />
      <Story
        image="./ichat01.jpg"
        profileSrc="./ichat02.jpg"
        title="Jermain Cole"
      />
      <Story
        image="./ichat01.jpg"
        profileSrc="./ichat02.jpg"
        title="DJ Khaled"
      />
      <Story
        image="./ichat01.jpg"
        profileSrc="./ichat02.jpg"
        title="Israel Adesanya"
      />
      <Story
        image="./ichat01.jpg"
        profileSrc="./ichat02.jpg"
        title="Isaiah Prophet"
      />
      <Story
        image="./ichat01.jpg"
        profileSrc="./ichat02.jpg"
        title="Interest Highs"
      />
    </div>
  );
}

export default StoryReel;
