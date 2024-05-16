import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({
  title,
  description,
  buttonText,
  toLink,
  cardStyles = "bg-gray-100 p-6 rounded-lg shadow-md",
  buttonStyles = "bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700",
}) => {
  return (
    <>
      <div className={cardStyles}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">{description}</p>
        <Link to={`${toLink}`} className={`inline-block ${buttonStyles}`}>
          {buttonText}
        </Link>
      </div>
    </>
  );
};

export default Card;
