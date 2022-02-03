const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required></input>
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog Author:</label>
        <select>
          <option value="Allan">Allan</option>
          <option value="Tommy">Tommy</option>
          
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
