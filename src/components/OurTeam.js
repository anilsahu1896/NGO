import React, { useState } from 'react';
import AddTeamMember from './AddTeamMember';

const OurTeam = () => {
  const initialTeamData = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      mobile: '123-456-7890',
      dob: '1993-05-15',
      regYear: 2020,
      occupation: 'Software Engineer',
      address: '123 Main St, Anytown',
      batch: 'Batch A',
      comments: 'Active volunteer',
      gender: 'Male',
      donation: '$100',
      group: 'Group 1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      mobile: '987-654-3210',
      dob: '1998-11-20',
      regYear: 2022,
      occupation: 'Teacher',
      address: '456 Oak Ave, Anytown',
      batch: 'Batch B',
      comments: 'Helps with events',
      gender: 'Female',
      donation: '$50',
      group: 'Group 2',
    },
        {
      id: 3,
      name: 'David Lee',
      age: 40,
      mobile: '555-123-4567',
      dob: '1983-03-10',
      regYear: 2019,
      occupation: 'Doctor',
      address: '789 Pine Ln, Anytown',
      batch: 'Batch A',
      comments: 'Regular donor',
      gender: 'Male',
      donation: '$500',
      group: 'Group 3',
    },
        {
      id: 4,
      name: 'Sarah Jones',
      age: 28,
      mobile: '111-222-3333',
      dob: '1995-07-25',
      regYear: 2021,
      occupation: 'Nurse',
      address: '101 Elm St, Anytown',
      batch: 'Batch C',
      comments: 'Provides medical assistance',
      gender: 'Female',
      donation: '$75',
      group: 'Group 1',
    },
        {
      id: 5,
      name: 'Michael Brown',
      age: 35,
      mobile: '444-555-6666',
      dob: '1988-09-01',
      regYear: 2018,
      occupation: 'Lawyer',
      address: '222 Maple Dr, Anytown',
      batch: 'Batch B',
      comments: 'Offers legal advice',
      gender: 'Male',
      donation: '$200',
      group: 'Group 2',
    },
    // Add more team members here...
  ];

  const [teamData, setTeamData] = useState(initialTeamData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColumn, setFilterColumn] = useState('');
  const [editId, setEditId] = useState(null); // State to store the ID of the team member being edited
  const [showAddForm, setShowAddForm] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMember = (newMember) => {
      setTeamData([...teamData, newMember]);
      setIsModalOpen(false); // Close the modal after adding
  };
   
  const handleDelete = (id) => {
    setTeamData(teamData.filter((person) => person.id !== id));
  };

  const handleEdit = (id) => {
    // Open a modal or implement your edit logic here
    setEditId(id); // Set the editId state to the clicked team member's ID
  };

  // Function to handle changes in the edit modal (if applicable)
  const handleEditChange = (event) => {
    // Update the team member data based on the edited field
    const updatedTeamData = [...teamData];
    const index = updatedTeamData.findIndex((person) => person.id === editId);
    updatedTeamData[index][event.target.name] = event.target.value;
    setTeamData(updatedTeamData);
  };

  // Function to close the edit modal (if applicable)
  const closeEditModal = () => {
    setEditId(null);
  };

  const filteredData = teamData.filter((person) => {
    if (!searchTerm) return true;

    const valueToSearch = filterColumn
      ? person[filterColumn].toString().toLowerCase()
      : Object.values(person).join(' ').toLowerCase();

    return valueToSearch.includes(searchTerm.toLowerCase());
  });


  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Our Team
          </h2>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Member</button>
            <AddTeamMember isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onAdd={handleAddMember} />
        <div className="overflow-x-auto"> {/* Added for horizontal scrolling on smaller screens */}
        <table className="min-w-full divide-y divide-gray-200 table-auto border border-collapse border-gray-300">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                  ID
                </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Age</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Mobile</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">DOB</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Reg. Year</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Occupation</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Address</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Batch</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Comments</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Gender</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Donation</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">Group</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((person) => (
              <tr key={person.id}>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.id}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.name}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.age}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.mobile}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.dob}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.regYear}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.occupation}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.address}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.batch}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.comments}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.donation}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{person.group}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                    <div className="flex justify-center space-x-2">
                      {editId === person.id ? (
                        <>
                          {/* Edit form or modal content goes here */}
                          <input
                            type="text"
                            name="name" // Replace with the appropriate field name
                            value={person.name} // Set the initial value
                            onChange={handleEditChange}
                          />
                          <button onClick={closeEditModal}>Save</button>
                        </>
                      ) : (
                        <button onClick={() => handleEdit(person.id)}>Edit</button>
                      )}
                      <button onClick={() => handleDelete(person.id)}>Delete</button>
                    </div>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;