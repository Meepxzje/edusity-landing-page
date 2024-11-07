// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Campus.css";

const Campus = () => {
  const gallery_1 = "https://greatstack.in/assets/gallery-1-HP2uKW94.png";
  const gallery_2 = "https://greatstack.in/assets/gallery-2-DYatBGZh.png";
  const gallery_3 = "https://greatstack.in/assets/gallery-3-C4KpO1U2.png";
  const gallery_4 = "https://greatstack.in/assets/gallery-4-LJEJ329C.png";
  const white_arrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII='
 
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery_1" />
        <img src={gallery_2} alt="gallery_1" />
        <img src={gallery_3} alt="gallery_1" />
        <img src={gallery_4} alt="gallery_1" />
      </div>
      <button className="btn dark-btn">See more here <img src={white_arrow} alt="white_arrow"/></button>
    </div>
  );
};

export default Campus;
