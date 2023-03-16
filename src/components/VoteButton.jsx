import {useState} from 'react';
import {voteForReview} from '../utils/api';

const VoteButton = ({voted, setVoted, singleReview, setSingleReciew}) => {
  const [upVote, setUpVote] = useState('\u{1F44D}');
  const [isVotingErr, setIsVotingErr] = useState('');

  const handleUpVoteClick = () => {
    setIsVotingErr('');
    setUpVote(`\u{1F44D} `);
    setVoted(1);
    voteForReview(singleReview.review_id).catch(() => {
      setVoted(0);
      setIsVotingErr('Error, try again!');
    });
  };
  return (
    <div className="reviewCardVotes">
      <button id="upVote" onClick={handleUpVoteClick} disabled={voted === 1}>
        {upVote} {isVotingErr}
      </button>
      <p>{singleReview.votes + voted} votes</p>
    </div>
  );
};

export default VoteButton;
