import { User } from '@/types/user';
import styles from './UserDetails.module.css';

interface UserDetailsProps {
  user: User;
}

export function UserDetails({ user }: UserDetailsProps) {
  const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className={styles.details}>
      <h2>{user.name}</h2>
      <a href={`mailto:${user.email}`} className={styles.email}>{user.email}</a>
      
      <section className={styles.section}>
        <h3>Address</h3>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
          View on map
        </a>
      </section>

      <section className={styles.section}>
        <h3>Contact</h3>
        <p>Phone: <a href={`tel:${user.phone}`} className={styles.link}>{user.phone}</a></p>
        <p>Website: <a href={`https://${user.website}`} className={styles.link}>{user.website}</a></p>
      </section>

      <section className={styles.section}>
        <h3>Company</h3>
        <div className={styles.companyDetails}>
          <p><span className={styles.label}>Name:</span> {user.company.name}</p>
          <p><span className={styles.label}>Catch phrase:</span> {user.company.catchPhrase}</p>
          <p><span className={styles.label}>Business:</span> {user.company.bs}</p>
        </div>
      </section>
    </div>
  );
}
