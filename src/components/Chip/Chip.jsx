import styles from './Chip.module.css';

const Chip = ({ label }) => {
  return <p className={styles.chip}>{label}</p>;
};

export default Chip;
