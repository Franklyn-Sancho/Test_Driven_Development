const loki = require('lokijs')

class TodoRepository {
	constructor() {
		const db = new loki('todo', { })
		this.schedule = db.addCollection('schedule')
	}

	list() {
		return this.schedule.find()
	}

	create(data) {
		return this.schedule.insertOne(data)
	}
}

module.exports = TodoRepository

const c = new TodoRepository()

c.create({name: 'Husky', age: 90})
c.create({name: 'Simão', age: 90})

console.log('list', c.list())
 