import { useNavigate } from 'react-router-dom';

export default function AddMovieForm() {
  const navigate = useNavigate();

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" required />
        </div>
        
        <div className="form-group">
          <label>Director:</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Genre:</label>
          <select required>
            <option value="">Select Genre</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Release Year:</label>
          <input type="number" min="1900" max="2024" required />
        </div>

        <div className="form-group">
          <label>Synopsis:</label>
          <textarea rows="4" required></textarea>
        </div>

        <div className="form-group">
          <label>Poster Image URL:</label>
          <input type="url" required />
        </div>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
} 