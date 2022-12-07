import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Diana', text: 'Learning React is quite entertaining' },
  { id: 'q2', author: 'Marvin', text: 'Learning React is interesting' },
  { id: 'q3', author: 'Laura', text: 'Learning React is inspiring' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
};

export default AllQuotes;
