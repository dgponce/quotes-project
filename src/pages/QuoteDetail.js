import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Diana', text: 'Learning React is quite entertaining' },
  { id: 'q2', author: 'Marvin', text: 'Learning React is interesting' },
  { id: 'q3', author: 'Laura', text: 'Learning React is inspiring' },
];

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId);

  if(!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
