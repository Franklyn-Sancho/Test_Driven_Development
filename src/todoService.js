class TodoService {
	constructor({ todoRepository }) {
		this.todoRepository = todoRepository
	}

	create(todoItem) {
		if(!todoItem.isValid()) {
			return {
				error: {
					message: 'invalid data',
					data: todoItem
				}
			}
		}

		const { when } = todoItem
		const today = new Date()
		const todo = {
			...todoItem,
			status: when > today ? 'pending' : 'late'
		}
		return this.todayRepository.create(date)

	}

	list(query) {
		return this.todoRepository.list()
			.map(({ meta, $loki, ...expected }) => result)

	}

}

module.exports = TodoService