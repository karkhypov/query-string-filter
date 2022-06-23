import { useEffect, useState } from 'react';

import { dataFilter } from './utils';

import mockData from './data.json';

import Chip from './components/Chip/Chip';
import Question from './components/Question/Question';

import styles from './App.module.css';

// ?q=question&co=facebook&pos=software+engineer,data+scientist

const App = () => {
  const [data, setData] = useState(null);
  const [chips, setChips] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    setData(mockData);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (data) {
      let tempData = data;
      const chips = [];

      for (let [key, value] of urlParams) {
        if (value.includes(',')) {
          value = value.split(',');
        }

        if (key === 'q') {
          tempData = dataFilter(tempData, 'title', value);
        }

        if (key === 'co') {
          chips.push(value);
          tempData = dataFilter(tempData, 'companies', value);
        }

        if (key === 'pos') {
          chips.push(value);
          tempData = dataFilter(tempData, 'positions', value);
        }
      }

      setChips(chips.flat().filter(Boolean));
      setFilteredData(tempData);
    }
  }, [data]);

  const handleClick = () => (window.location.href = '/');

  return (
    <div className={styles.app}>
      <h1>Questions</h1>

      <div className={styles.chips}>
        {chips?.map((chip, i) => (
          <Chip key={i} label={chip} />
        ))}
        {chips?.length !== 0 && (
          <button className={styles.button} onClick={handleClick}>
            reset
          </button>
        )}
      </div>

      <div className={styles.questions}>
        {filteredData?.length === 0 ? (
          <h1>No data found</h1>
        ) : (
          filteredData?.map((data, i) => <Question key={i} title={data.title} />)
        )}
      </div>
    </div>
  );
};

export default App;
