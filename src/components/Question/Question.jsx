import styles from './Question.module.css';

const Question = ({ title }) => {
  return <p className={styles.question}>{title}</p>;
};

export default Question;
