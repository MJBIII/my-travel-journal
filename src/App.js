import React, { useState } from "react";
import "./App.css";

function App() {
  const [journalEntries, setJournalEntries] = useState([]);
  const [formData, setFormData] = useState({ destination: "", date: "", description: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setJournalEntries([...journalEntries, formData]);
    setFormData({ destination: "", date: "", description: "" });
  };

  return (
    <div>
      <div className="navbar">
        <img
          src="https://www.143vinyl.com/files/downloads/free_downloads/shapes/Airplane.svg"
          alt="Airplane logo"
          className="airplane-logo"
        />
        <h1>My Travel Journal</h1>

        {/* Authentication Buttons: Create Account and */}
        <div className="auth-buttons">
          <button 
            className="auth-btn"
            onClick={() => alert("Create Account feature coming soon!")}
            >
              Create Account</button>
          <button 
            className="auth-btn"
            onClick={() => alert("Login feature coming soon!")}
            >
              Login</button>
      </div>
    </div>
      {/*Main Content*/}
      <div className="journal">
        <div className="card">
          <a href="https://www.lonelyplanet.com/mexico/mexico-city" target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.pexels.com/photos/3551805/pexels-photo-3551805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Mexico City"
            />
          </a>
          <h2>Mexico City</h2>
          <p>
            Explore the vibrant streets, rich history, and delicious food of Mexico's capital city.
          </p>
        </div>
        <div className="card">
          <a href="https://www.lonelyplanet.com/spain/barcelona" target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Barcelona"
            />
          </a>
          <h2>Barcelona</h2>
          <p>
            Discover stunning architecture, lively culture, and the Mediterranean coastline.
          </p>
        </div>
        <div className="card">
          <a href="https://www.lonelyplanet.com/italy/rome" target="_blank" rel="noopener noreferrer">
            <img
              src="https://images.pexels.com/photos/56886/vittorio-emanuele-monument-rome-rome-palace-altare-della-patria-56886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Rome"
            />
          </a>
          <h2>Rome</h2>
          <p>
            Step back in time with ancient ruins, iconic landmarks, and world-class cuisine.
          </p>
        </div>
        <div className="hero">
          <h1>Welcome to My Travel Journal</h1>
          <p>🌎✈️ Explore the beauty of the world through my adventures! ⬇️⬇️</p>
        </div>
        
        {/* Tracker Section */}
        <div className="tracker">
          <h3>Places Visited: {journalEntries.length}</h3>
          <progress value={journalEntries.length} max="10"></progress>
        </div>

        {/* Travel Journal Form */}
        <div className="journal-form">
          <h2>Add a New Journal Entry</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Write about your adventure..."
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Add Entry</button>
          </form>
        </div>

        {/* Display Journal Entries */}
        <div className="journal-entries">
          <h2>My Travel Journal Entries</h2>
          {journalEntries.length === 0 ? (
            <p>No entries yet. Start journaling your adventures! 📝</p>
          ) : (
            journalEntries.map((entry, index) => (
              <div key={index} className="journal-entry">
                <h3>{entry.destination}</h3>
                <p><strong>Date:</strong> {entry.date}</p>
                <p>{entry.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
      
      <footer className="footer">
        <p>“The world is a book, and those who do not travel read only one page.” – Saint Augustine</p>
        <div className="socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> | 
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a> | 
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

export default App;