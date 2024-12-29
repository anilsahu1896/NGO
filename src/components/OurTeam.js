import React, { useState, useEffect } from 'react';
import AddTeamMember from './AddTeamMember';

const OurTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColumn, setFilterColumn] = useState('');
  const [editId, setEditId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch user data with follow-ups from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user-followups');
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setTeamData(data);
        } else {
          console.error('Failed to fetch team data');
        }
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddMember = (newMember) => {
    setTeamData([...teamData, newMember]);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setTeamData(teamData.filter((person) => person._id !== id));
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleEditChange = (event) => {
    const updatedTeamData = [...teamData];
    const index = updatedTeamData.findIndex((person) => person._id === editId);
    updatedTeamData[index][event.target.name] = event.target.value;
    setTeamData(updatedTeamData);
  };

  const closeEditModal = () => {
    setEditId(null);
  };

  const filteredData = teamData.filter((person) => {
    if (!searchTerm) return true;

    const valueToSearch = filterColumn
      ? person[filterColumn]?.toString().toLowerCase()
      : Object.values(person).join(' ').toLowerCase();

    return valueToSearch.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Our Team</h2>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Member
        </button>
        <AddTeamMember isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onAdd={handleAddMember} />
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto border border-collapse border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border">ID</th>
                <th className="px-6 py-3 border">Name</th>
                <th className="px-6 py-3 border">Email</th>
                <th className="px-6 py-3 border">Phone</th>
                <th className="px-6 py-3 border">Address</th>
                <th className="px-6 py-3 border">Follow-Ups</th>
                <th className="px-6 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((person) => (
                <tr key={person._id}>
                  <td className="px-6 py-4 border">{person.user_id}</td>
                  <td className="px-6 py-4 border">{person.first_name} {person.last_name}</td>
                  <td className="px-6 py-4 border">{person.email}</td>
                  <td className="px-6 py-4 border">{person.phone_number}</td>
                  <td className="px-6 py-4 border">{person.address}</td>
                  <td className="px-6 py-4 border">
                    {person.followups.length > 0 ? (
                      <ul>
                        {person.followups.map((followup) => (
                          <li key={followup._id}>
                            {followup.followup_date}: {followup.followup_notes}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      'No Follow-Ups'
                    )}
                  </td>
                  <td className="px-6 py-4 border">
                    <button
                      onClick={() => handleEdit(person._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(person._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2"
                    >
                      Delete
                    </button>
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