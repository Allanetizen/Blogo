import { useState } from "react";

const Create = () => {
    const [title, setTitle]= useState('');
    const [body, setBody]= useState('');
    const [author, setAuthor]= useState('Allan');
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}></input>
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
        <label>Blog Author:</label>
        <select  value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="Allan">Allan</option>
          <option value="Tommy">Tommy</option>
          <option value="Tommy">Turner</option>
          
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>

      </form>
    </div>
  );
};

export default Create;
