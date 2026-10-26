const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      search by:
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
