
import "./Title.css";


// eslint-disable-next-line react/prop-types
function Title({ subTitle, title }) {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
