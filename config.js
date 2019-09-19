module.exports = {

	server: {
		host: 'localhost',
		port: 8888
	},

	client: {
		root: 'public_html/'
	},

	database: {
		development: {
			client: 'sqlite3',
			useNullAsDefault: true,
			connection: {
				host: 'localhost',
				user: 'admin',
				password: 'admin',
				filename: './data/database.sqlite3'
			},
			pool: {
				afterCreate: (conn, cb) => {
					conn.run('PRAGMA foreign_keys = ON', cb);
				}
			}
		},

		production: {
			client: 'postgresql',
			connection: {
				database: 'example'
			},
			pool: {
				min: 2,
				max: 10
			}
		}
	}

};