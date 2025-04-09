import { classNames } from './classNames'

describe('classNames', () => {
	test('first param', () => {
		expect(classNames('testClass')).toBe('testClass')
	})

	test('second param', () => {
		expect(
			classNames('testClass', { secondParam1: true, secondParam2: true }, [])
		).toBe('testClass secondParam1 secondParam2')
	})

	test('third param', () => {
		expect(classNames('testClass', {}, ['third_param1', 'third_param2'])).toBe(
			'testClass third_param1 third_param2'
		)
	})

	test('all param', () => {
		expect(
			classNames('testClass', { secondParam1: true, secondParam2: false }, [
				'third_param1',
				'third_param2',
			])
		).toBe('testClass third_param1 third_param2 secondParam1')
	})
})
