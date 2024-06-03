import React from 'react'; // Importuje bibliotekę React
import PropTypes from 'prop-types'; // Importuje bibliotekę PropTypes do walidacji typów propów
import styles from './Profile.module.css'; // Importuje moduły CSS do stylizacji komponentu

// Definicja komponentu Profile, który przyjmuje propsy: username, tag, location, avatar, stats
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      {' '}
      {/* Użycie klasy CSS profile */}
      <div className={styles.description}>
        {' '}
        {/* Użycie klasy CSS description */}
        <img src={avatar} alt="User avatar" className={styles.avatar} />{' '}
        {/* Wyświetlanie awatara użytkownika */}
        <p className={styles.name}>{username}</p>{' '}
        {/* Wyświetlanie nazwy użytkownika */}
        <p className={styles.tag}>@{tag}</p>{' '}
        {/* Wyświetlanie tagu użytkownika */}
        <p className={styles.location}>{location}</p>{' '}
        {/* Wyświetlanie lokalizacji użytkownika */}
      </div>
      <ul className={styles.stats}>
        {' '}
        {/* Użycie klasy CSS stats do listy statystyk */}
        <li>
          <span className={styles.label}>Followers</span>{' '}
          {/* Etykieta Followers */}
          <span className={styles.quantity}>{stats.followers}</span>{' '}
          {/* Ilość Followers */}
        </li>
        <li>
          <span className={styles.label}>Views</span> {/* Etykieta Views */}
          <span className={styles.quantity}>{stats.views}</span>{' '}
          {/* Ilość Views */}
        </li>
        <li>
          <span className={styles.label}>Likes</span> {/* Etykieta Likes */}
          <span className={styles.quantity}>{stats.likes}</span>{' '}
          {/* Ilość Likes */}
        </li>
      </ul>
    </div>
  );
};

// Definicja typów propów przy użyciu PropTypes
Profile.propTypes = {
  username: PropTypes.string.isRequired, // username musi być stringiem i jest wymagany
  tag: PropTypes.string.isRequired, // tag musi być stringiem i jest wymagany
  location: PropTypes.string.isRequired, // location musi być stringiem i jest wymagany
  avatar: PropTypes.string.isRequired, // avatar musi być stringiem (URL) i jest wymagany
  stats: PropTypes.shape({
    // stats musi być obiektem o określonej strukturze
    followers: PropTypes.number.isRequired, // followers musi być liczbą i jest wymagany
    views: PropTypes.number.isRequired, // views musi być liczbą i jest wymagany
    likes: PropTypes.number.isRequired, // likes musi być liczbą i jest wymagany
  }).isRequired,
};

export default Profile; // Eksportowanie komponentu Profile jako domyślnego eksportu
