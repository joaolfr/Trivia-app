import {useCallback, useEffect, useState} from 'react';
import {API} from '../../api/config';
import {useTriviaStore} from '../../stores';

export default () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {setQuestions} = useTriviaStore();

  const loadQuestions = useCallback(async () => {
    setLoading(true);
    setError(false);

    let query = '?amount=5&difficulty=hard&type=boolean';

    try {
      const {data} = await API.get(
        query,
      );
   
      console.log('questions: ', data);

      setQuestions(data.results)
      setLoading(false);

    } catch (err) {
      setLoading(false);
      setError(true)
      console.log('erro statement: ', err);
    }
  }, []);
  return {loading, loadQuestions, error};
};
