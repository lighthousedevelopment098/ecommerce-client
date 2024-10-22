
const Leopord = () => {
  return (
    <div className="p-4 rounded">
      <h2 className="text-lg font-semibold mb-2">Leopord Shipping Form</h2>
      <form>
        <div className="mb-4">
          <label className="input-label">Leopord Field 1</label>
          <input type="text" className="input" />
        </div>
        <div className="mb-4">
          <label className="input-label">Leopord Field 2</label>
          <input type="text" className="input" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default Leopord;