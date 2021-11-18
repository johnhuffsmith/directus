import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('directus_notifications', (table) => {
		table.increments();
		table.timestamp('timestamp');
		table.uuid('user').references('id').inTable('directus_users');
		table.text('message');
		table.string('collection', 64).references('collection').inTable('directus_collections');
		table.string('item'); // Any ID
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable('directus_notifications');
}
