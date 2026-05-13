import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <ClipLoader
      color="#e50914"
      position="absolute"
      size={60}
      display="flex"
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
