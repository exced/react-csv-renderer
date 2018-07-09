import React, { Component } from 'react';

import { Document, Header, Row, render } from '../src';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: ['a,b', 'c,d', 'e,f'],
		};
	}

	render() {
		return (
			<Document>
				<Header>{'Name,Age'}</Header>
				<Row>{'"Thomas",24'}</Row>
				<Row>{'test,3'}</Row>
				<Row>{'12376812,24,hukhui'}</Row>
				{this.state.rows.map((row, i) => <Row key={`row-${i}`}>{row}</Row>)}
			</Document>
		);
	}
}

render(<App />, `${__dirname}/table.csv`);
