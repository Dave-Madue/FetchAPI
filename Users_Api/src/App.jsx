import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', overflowX: 'auto' }}>
      <h2 style={{ fontFamily: 'sans-serif' }}>User Directory</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'sans-serif' }}>
        <thead>
          <tr style={{ backgroundColor: '#000000', color: '#fff', textAlign: 'left' }}>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Username</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Address</th>
            <th style={cellStyle}>Phone</th>
            <th style={cellStyle}>Website</th>
            <th style={cellStyle}>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={cellStyle}>{user.id}</td>
              <td style={cellStyle}>{user.name}</td>
              <td style={cellStyle}>@{user.username}</td>
              <td style={cellStyle}>{user.email}</td>
              <td style={cellStyle}>
                {`${user.address.street}, ${user.address.suite}, ${user.address.city} (${user.address.zipcode})`}
              </td>
              <td style={cellStyle}>{user.phone}</td>
              <td style={cellStyle}>
                <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                  {user.website}
                </a>
              </td>
              <td style={cellStyle}><strong>{user.company.name}</strong></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = {
  padding: '12px',
  border: '1px solid #ddd'
};

export default UserTable;