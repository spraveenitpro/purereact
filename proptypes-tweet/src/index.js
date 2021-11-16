import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";
import "./index.css";

function Comment({ msg, ath, lk, num }) {
	return (
		<div>
			<div className="author">{msg}</div>
			<div className="author">{ath}</div>
			<div className="author">{lk}</div>
			<div className="author">{num}</div>
		</div>
	);
}

Comment.propTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	like: PropTypes.number.isRequired,
	num: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

function Tweet({ tweet }) {
	return (
		<div className="tweet">
			<Avatar hash={tweet.gravatar} />
			<div className="content">
				<Author author={tweet.author} /> <Time time={tweet.timestamp} />
				<Message text={tweet.message} />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton count={tweet.retweets} />
					<LikeButton count={tweet.likes} />
					<MoreOptionsButton />
				</div>
			</div>
			<Comment
				author="mr_unpopular"
				message="another message"
				like={0}
				num={3}
			/>
		</div>
	);
}

Tweet.propTypes = {
	tweet: PropTypes.object.isRequired,
};

const testTweet = {
	message: "Something about cats",
	gravatar: "80ad7e627570e773e0048ffb5208bba3",
	author: {
		handle: "catperson",
		name: " I am a Cat person",
	},
	likes: 2,
	retweets: 67,
	timestamp: "2011-07-30 21:24:37",
};

function Avatar({ hash }) {
	const url = `https://www.gravatar.com/avatar/${hash}`;
	return <img src={url} className="avatar" alt="avatar" />;
}

Avatar.propTypes = {
	hash: PropTypes.string.isRequired,
};

function Message({ text }) {
	return <div className="message">{text}</div>;
}

function Author({ author }) {
	const { name, handle } = author;
	return (
		<span className="author">
			<span className="name">{name}</span>
			<span className="handle">{handle}</span>
		</span>
	);
}

Author.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		handle: PropTypes.string.isRequired,
	}).isRequired,
};

const Time = ({ time }) => {
	const timeString = moment(time).fromNow();
	return <span className="time">{timeString}</span>;
};

Time.propTypes = {
	time: PropTypes.string.isRequired,
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function Count({ count }) {
	if (count > 0) {
		return <span className="retweet-count">{count}</span>;
	} else {
		return null;
	}
}

const RetweetButton = ({ count }) => {
	return (
		<span className="retweetbutton">
			<i className="fa fa-retweet retweet-button" />
			<Count count={count} />
		</span>
	);
};
const LikeButton = ({ count }) => (
	<span className="like-button">
		<i className="fa fa-heart" />
		{count > 0 && <span className="like-count">{count}</span>}
	</span>
);

LikeButton.propTypes = {
	count: PropTypes.number,
};
const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
