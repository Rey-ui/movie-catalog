const TimeIntervalBar = ({ value, change }) => {
  return (
    <select value={value} onChange={(e) => change(e.target.value)}>
      <option value="day" selected>
        day
      </option>
      <option value="week">week</option>
    </select>
  );
};

export default TimeIntervalBar;
