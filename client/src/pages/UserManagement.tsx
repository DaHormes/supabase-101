import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

interface User {
  id: string;
  email: string;
  created_at: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*');
    
    if (error) {
      console.error('Error fetching users:', error);
    } else {
      setUsers(data || []);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
