import css from "./TimeIntervalBar.module.css";
import { MdAccessTime } from "react-icons/md";
const TimeIntervalBar = ({ value, change }) => {
  return (
    <div className={css.selectIntervalContainer}>
      <MdAccessTime className={css.selectIntervalSvg} />
      <select
        className={css.selectInterval}
        value={value}
        onChange={(e) => change(e.target.value)}
      >
        <option className={css.optionInterval} value="day">
          Day
        </option>
        <option className={css.optionInterval} value="week">
          Week
        </option>
      </select>
    </div>
  );
};

export default TimeIntervalBar;
