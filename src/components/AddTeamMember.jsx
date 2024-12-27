import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal'; // Install: npm install react-modal

// Make sure to bind Modal to your app element
Modal.setAppElement('#root'); // Or wherever your app is mounted

const AddTeamMember = ({ isOpen, onRequestClose, onAdd }) => {
  const [newMember, setNewMember] = useState({
    name: '', age: '', mobile: '', dob: '', regYear: '', occupation: '', address: '', batch: '', comments: '', gender: '', donation: '', group: '',
  });

  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newMember.name || !newMember.age || !newMember.mobile || !newMember.dob ||
      !newMember.regYear || !newMember.occupation || !newMember.address || !newMember.batch || !newMember.gender
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    const newMemberWithId = { ...newMember, id: uuidv4() };
    onAdd(newMemberWithId);
    setNewMember({ name: '', age: '', mobile: '', dob: '', regYear: '', occupation: '', address: '', batch: '', comments: '', gender: '', donation: '', group: '' });
    onRequestClose(); // Close the modal after submission
  };

 
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '600px', // Set a maximum width
      width: '90%', // Occupy 90% of the screen width (responsive)
      maxHeight: '80vh', // Set a maximum height (80% of viewport height)
      overflowY: 'auto', // Enable vertical scrolling if content is too long
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      overflowY: 'auto' // Make the overlay scrollable too
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="Add Team Member Modal"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(newMember).map((key) => (
          <div className="mb-4" key={key}>
            <label htmlFor={key} className="block text-gray-700 font-medium mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type={key === 'age' || key === 'regYear' ? 'number' : key === 'dob' ? 'date' : 'text'}
              id={key} name={key} value={newMember[key]} onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
              required={key !== 'comments' && key !== 'donation' && key !== 'group'}
            />
          </div>
        ))}
        <div className="flex justify-between">
          <button type="button" onClick={onRequestClose} className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded">Cancel</button>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">Add Member</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTeamMember;