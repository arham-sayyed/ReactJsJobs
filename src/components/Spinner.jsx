/* eslint-disable react/prop-types */
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  const customCss = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#443dcc"
      loading={loading}
      cssOverride={customCss}
      size={150}
    />
  );
};

export default Spinner;
