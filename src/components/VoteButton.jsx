import {useState} from 'react';
import {voteForReview} from '../utils/api';

const VoteButton = ({voted, setVoted, singleReview}) => {
  const [vote, setVote] = useState('Vote');
  const [upVote, setUpVote] = useState('\u{1F44D}');
  const [isVotingErr, setIsVotingErr] = useState(false);

  const handleUpVoteClick = () => {
    setIsVotingErr(false);
    setUpVote(`\u{1F44D} voted`);
    setVoted(1);
    voteForReview(singleReview.review_id).catch(() => {
      setVoted(0);
      setIsVotingErr(true);
      setUpVote(`Try again!`);
    });
  };
  return (
    <div className="reviewCardVotes">
      <button id="upVote" onClick={handleUpVoteClick} disabled={voted === 1}>
        {upVote}
      </button>
      <p>{singleReview.votes} votes</p>
    </div>
  );
};

export default VoteButton;
