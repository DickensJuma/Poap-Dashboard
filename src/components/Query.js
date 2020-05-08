import React from 'react';

URL = "https://10degrees.uk/wp-json/wp/v2/posts"; // URL variable stores JSON url || API taken from 10 Degrees WordPress Agency

class Query extends React.Component {
	state = {
		post: [],
		allPosts: []
	};

	componentDidMount() {
		axios
			.get(URL, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			})
			.then(({ data }) => {
				this.setState({
					post: data,
					allPosts: data // array data from JSON stored in these
				});
			})
			.catch(err => {});
	}

	_onKeyUp = e => {
		// filter post list by title using onKeyUp function
		const post = this.state.allPosts.filter(item =>
			item.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
		);
		this.setState({ post });
	};

	render() {
		return (
			<div className="container">
				<div className="search-outer">
					<form
						role="search"
						method="get"
						id="searchform"
						className="searchform"
						action=""
					>
						{/* input field activates onKeyUp function on state change */}
						<input
							type="search"
							onChange={this._onKeyUp}
							name="s"
							id="s"
							placeholder="Search"
						/>
						<button type="submit" id="searchsubmit">
							<i className="fa fa-search" aria-hidden="true" />
						</button>
					</form>
				</div>
				<ul className="data-list">
					{/* post items mapped in a list linked to onKeyUp function */}
					{this.state.post.map((item, index) => (
						<li className={"block-" + index}>
							<a className="title" href={item.link}>
								<h3>{item.title.rendered}</h3>
							</a>
							<a className="link" href={item.link}>
							 
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Query