import { Document, Header, Root, Row } from '../components';
import { Document as DocumentType, Header as HeaderType, Root as RootType, Row as RowType } from '../constants/types';

let ROOT_NODE_INSTANCE = null;

function getHostContextNode(rootNode) {
	if (typeof rootNode !== undefined) {
		return (ROOT_NODE_INSTANCE = rootNode);
	} else {
		return (ROOT_NODE_INSTANCE = new Root());
	}
}

function createElement(type, props) {
	switch (type) {
		case RootType:
			return new Root();
		case DocumentType:
			return new Document(ROOT_NODE_INSTANCE, props);
		case HeaderType:
			return new Header(ROOT_NODE_INSTANCE, props);
		case RowType:
			return new Row(ROOT_NODE_INSTANCE, props);
		default:
			return undefined;
	}
}

export { createElement, getHostContextNode };
