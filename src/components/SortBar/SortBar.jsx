const SortBar = ({ value, change }) => {
  return (
    <select value={value} onChange={(e) => change(e.target.value)}>
      <option value="">Sort:</option>
      <option value="az">A-z</option>
      <option value="za">Z-a</option>
    </select>
  );
};

export default SortBar;
