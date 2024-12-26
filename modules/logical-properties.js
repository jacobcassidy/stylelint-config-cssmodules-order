// Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values
export const logicalPropertiesModule = {
	blocks: [ 'block-size', 'min-block-size', 'max-block-size' ],
	borders: [
		'border-block',
		'border-block-color',
		'border-block-end',
		'border-block-end-color',
		'border-block-end-style',
		'border-block-end-width',
		'border-block-start',
		'border-block-start-color',
		'border-block-start-style',
		'border-block-start-width',
		'border-block-style',
		'border-block-width',
		'border-end-end-radius',
		'border-end-start-radius',
		'border-inline',
		'border-inline-color',
		'border-inline-end',
		'border-inline-end-color',
		'border-inline-end-style',
		'border-inline-end-width',
		'border-inline-start',
		'border-inline-start-color',
		'border-inline-start-style',
		'border-inline-start-width',
		'border-inline-style',
		'border-inline-width',
		'border-start-end-radius',
		'border-start-start-radius',
	],
	inlines: [ 'inline-size', 'min-inline-size', 'max-inline-size' ],
	// insets: [
	// 	'inset', // duplicated from positionedLayoutModule
	// 	'inset-block', // duplicated from positionedLayoutModule
	// 	'inset-block-end', // duplicated from positionedLayoutModule
	// 	'inset-block-start', // duplicated from positionedLayoutModule
	// 	'inset-inline', // duplicated from positionedLayoutModule
	// 	'inset-inline-end', // duplicated from positionedLayoutModule
	// 	'inset-inline-start', // duplicated from positionedLayoutModule
	// ],
	margins: [
		'margin-block',
		'margin-block-end',
		'margin-block-start',
		'margin-inline',
		'margin-inline-end',
		'margin-inline-start',
	],
	paddings: [
		'padding-block',
		'padding-block-end',
		'padding-block-start',
		'padding-inline',
		'padding-inline-end',
		'padding-inline-start',
	],
};
