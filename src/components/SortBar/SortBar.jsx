import css from "./SortBar.module.css";
import { LuFilter } from "react-icons/lu";
const SortBar = ({ value, change }) => {
  return (
    <div className={css.selectContainer}>
      <LuFilter className={css.selectSvg} />
      <select
        className={css.selectSort}
        value={value}
        onChange={(e) => change(e.target.value)}
      >
        <option className={css.sortOption} value="">
          Sort:
        </option>
        <option className={css.sortOption} value="az">
          A-z
        </option>
        <option className={css.sortOption} value="za">
          Z-a
        </option>
      </select>
    </div>
  );
};

export default SortBar;
