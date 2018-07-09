import { Root as RootType } from '../constants/types';
import { createElement } from '../utils/createElement';
import CSVReconciler from '../reconciler/';

function render(element, filePath) {
	const container = createElement(RootType);

	const node = CSVReconciler.createContainer(container);

	CSVReconciler.updateContainer(element, node, null);

	container.generator.generate(filePath);
}

export default render;
