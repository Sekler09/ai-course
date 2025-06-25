import styles from './page.module.css';
import { UsersTable } from '@/components/UsersTable/UsersTable';
import { User } from '@/types/user';

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export default async function Lesson2Page() {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <UsersTable users={users} />
    </div>
  );
}
