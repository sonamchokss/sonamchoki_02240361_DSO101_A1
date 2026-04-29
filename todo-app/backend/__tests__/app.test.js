// Basic tests for the Todo App Backend

describe('Todo App Backend Tests', () => {

    // Test 1: Basic math check
    test('adds 1 + 1 to equal 2', () => {
        expect(1 + 1).toBe(2);
    });

    // Test 2: Check string
    test('todo app name is correct', () => {
        const appName = 'Todo App';
        expect(appName).toBe('Todo App');
    });

    // Test 3: Check array of todos
    test('todo list should be an array', () => {
        const todos = [
            { id: 1, task: 'Buy groceries', completed: false },
            { id: 2, task: 'Do homework', completed: true }
        ];
        expect(Array.isArray(todos)).toBe(true);
        expect(todos.length).toBe(2);
    });

    // Test 4: Check todo object structure
    test('todo item should have id, task and completed fields', () => {
        const todo = { id: 1, task: 'Buy groceries', completed: false };
        expect(todo).toHaveProperty('id');
        expect(todo).toHaveProperty('task');
        expect(todo).toHaveProperty('completed');
    });

    // Test 5: Check completed status
    test('completed todo should return true', () => {
        const todo = { id: 1, task: 'Do homework', completed: true };
        expect(todo.completed).toBe(true);
    });

});