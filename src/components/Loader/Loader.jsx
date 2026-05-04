import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <ClipLoader
      color="green"
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
