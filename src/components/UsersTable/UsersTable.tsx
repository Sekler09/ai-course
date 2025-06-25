'use client';
import { User } from '@/types/user';
import styles from './UsersTable.module.css';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { UserDetails } from '../UserDetails/UserDetails';

interface UsersTableProps {
  users: User[];
}

export function UsersTable({ users: initialUsers }: UsersTableProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleAnimationComplete = () => {
    if (isClosing) {
      setSelectedUser(null);
      setIsClosing(false);
    }
  };

  const handleDelete = (e: React.MouseEvent, userId: number) => {
    e.stopPropagation();
    setUsers(users.filter(user => user.id !== userId));
    if (selectedUser?.id === userId) {
      handleClose();
    }
  };

  return (
    <>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NAME / EMAIL</th>
              <th>ADDRESS</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
              <th>COMPANY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr 
                key={user.id} 
                onClick={() => setSelectedUser(user)}
                className={styles.tableRow}
              >
                <td data-label="Name/Email">
                  <div className={styles.nameEmail}>
                    <span className={styles.name}>{user.name}</span>
                    <a href={`mailto:${user.email}`} className={styles.email} onClick={e => e.stopPropagation()}>
                      {user.email}
                    </a>
                  </div>
                </td>
                <td data-label="Address">{`${user.address.street}, ${user.address.city}`}</td>
                <td data-label="Phone">
                  <a href={`tel:${user.phone}`} className={styles.phone} onClick={e => e.stopPropagation()}>
                    {user.phone}
                  </a>
                </td>
                <td data-label="Website">
                  <a href={`https://${user.website}`} className={styles.website}>
                    {user.website}
                  </a>
                </td>
                <td data-label="Company">{user.company.name}</td>
                <td data-label="Action">
                  <button 
                    className={styles.actionButton}
                    onClick={(e) => handleDelete(e, user.id)}
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={!!selectedUser && !isClosing} 
        onClose={handleClose}
        onAnimationComplete={handleAnimationComplete}
      >
        {selectedUser && <UserDetails user={selectedUser} />}
      </Modal>
    </>
  );
}
