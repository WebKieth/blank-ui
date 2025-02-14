import { ExtractPublicPropTypes, defineComponent, inject, provide } from 'vue'
import { ProvidedTableConfig, WhenSelect, TableControlsProvided } from './types'
import { defaultTableControlsProvided, tableConfigSymbol, tableControlsProvidedSymbol } from './common'
import { definePropType } from '../../utils'

import { tableStyle } from '../../../../shared/components/table/styles.css'

import {
	TableBody,
} from './modules'
import { tableRowStylingProps } from './modules/row'
import { tableCellStylingProps } from './modules/cell'
import { Columns, Rows, TableSize } from '../../../../shared/components/table/types'

export const tableProps = {
	...tableRowStylingProps,
	...tableCellStylingProps,
	style: {
		type: definePropType<string>(String),
		default: tableStyle
	},
	size: {
		type: definePropType<TableSize>(String),
		default: 'medium',
	},
	columns: {
		type: definePropType<Columns | null>(Array),
		default: null,
	},
	rows: {
		type: definePropType<Rows | null>(Object),
		default: null,
	},
	expandRows: {
		type: definePropType<boolean>(Boolean),
		default: false
	},
	selected: {
		type: definePropType<string | string[]>(String || Array<String>),
		default: []
	},
	whenSelect: {
		type: definePropType<WhenSelect>(Function),
		default: null
	}
} as const

export type TableProps = ExtractPublicPropTypes<typeof tableProps>

export const Table = defineComponent({
	name: 'Table',
	components: { TableBody },
	props: tableProps,
	setup(props, { attrs, slots }) {
		// console.log(props, tableProps)
		const tableControlsProvided = inject<TableControlsProvided>(tableControlsProvidedSymbol, { ...defaultTableControlsProvided })
		provide<ProvidedTableConfig>(tableConfigSymbol, { props, slots, provided: { ...tableControlsProvided } })

		return () => (
			<table
				{...attrs}
				class={props.style}>
				{slots.header && slots.header()}
				{slots.loading
					? slots.loading()
					: slots.default
						? slots.default()
						: <TableBody />}
				{slots.footer && slots.footer()}
			</table>
		)
	}
})

export { tableStyle }