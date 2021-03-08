const { describe, it, before, afterEach } = require('mocha')
const { expect } = require('chai')
const TodoRepository = require('../src/todoRepository')
const { createSandbox } = require('sinon')

describe('todoRepository', () => {
	let todoRepository
	let sandbox
	before(() => {
		todoRepository = new TodoRepository()
		sandbox = new createSandbox()
	})
	afterEach(() => {
		sandbox.restore()
	})
	describe('methods signature', () => {
		it('should call insertOne from lokijs', () => {
			const mockDatabase = [ 
				{ 
					name: 'Husky',
    				age: 90,
    				meta: { revision: 0, created: 1614869434391, version: 0 },
    				'$loki': 1 },
  				{ 	
  					name: 'Simão',
    				age: 90,
    				meta: { revision: 0, created: 1614869434392, version: 0 },
    				'$loki': 2 } 
				]

		const functionName = "find"
		const expectedReturn = mockDatabase


		sandbox.stub(
			todoRepository.schedule,
			functionName
		).return(expectedReturn)

		const result = todoRepository.list()
		expect(result).to.be.deep.equal(expectedReturn)
		expect(todoRepository.schedule(functionName).calledOnce).to.be.ok

		})
		it('should call find from lokijs', () => {
			const functionName = "insert"
		const expectedReturn = true
		
		
		sandbox.stub(
			todoRepository.schedule,
			functionName
		).return(expectedReturn)

		const data = { name: Husky }

		const result = todoRepository.create(data)
		expect(result).to.be.ok
		expect(todoRepository.schedule[functionName].calledOnceWithExactly(data).to.be.ok

		})
		})
	})


 


