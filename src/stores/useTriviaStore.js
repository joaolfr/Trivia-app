import create from 'zustand';

const initialState = {
  questions: [],
  
};

const useAnimeStore = create((set, get) => ({
  ...initialState,

  setQuestions: questionsList => set(state => ({...state, questions: questionsList })),
}));

export default useAnimeStore;
