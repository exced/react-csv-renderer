import React from 'react';
import { Document, Header, Row, render } from '../src';
import checksum from './utils/checksum';

it('Generate a CSV', async () => {
	const filePath = `${__dirname}/success.csv`;
	const expectedFilePath = `${__dirname}/success.test.csv`;
	const App = () => (
		<Document>
			<Header>{'Name,Age'}</Header>
			<Row>{'"Thomas",24'}</Row>
			<Row>{'test,3'}</Row>
			<Row>{'12376812,24'}</Row>
		</Document>
	);
	render(<App />, filePath);
	const expected = await checksum(expectedFilePath);
	const result = await checksum(filePath);
	expect(expected).toEqual(result);
});
