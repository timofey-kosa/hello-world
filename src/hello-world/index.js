import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>Hello World</div>
	);
};

createCustomElement('x-552192-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});
