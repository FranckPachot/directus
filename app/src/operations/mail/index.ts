import { defineOperationApp } from '@directus/shared/utils';

export default defineOperationApp({
	id: 'mail',
	icon: 'mail',
	name: '$t:operations.mail.name',
	description: '$t:operations.mail.description',
	preview: ({ name, options }) => `
# ${name}
**$t:subject**: ${options.subject}\n
**$t:operations.mail.to**: ${options.to}\n
**$t:operations.mail.template**: ${options.template}
	`,
	options: [
		{
			field: 'subject',
			name: '$t:subject',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'input',
			},
		},
		{
			field: 'to',
			name: '$t:operations.mail.to',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'tags',
			},
		},
		{
			field: 'template',
			name: '$t:operations.mail.template',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input-rich-text-md',
			},
		},
		{
			field: 'data',
			name: '$t:operations.mail.data',
			type: 'string',
			meta: {
				interface: 'input-code',
			},
		},
	],
});
