import { useTasks } from './use.tasks';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ApiRepo } from '../services/api.repo';
import { Task } from '../models/task';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

const addedTask = { id: 123 } as unknown as Task;
ApiRepo.prototype.getTasks = jest
  .fn()
  .mockResolvedValue([{ id: 34 } as unknown as Task]);
ApiRepo.prototype.createTask = jest.fn().mockResolvedValue(addedTask);
ApiRepo.prototype.deleteTask = jest.fn();
ApiRepo.prototype.updateTask = jest.fn();

describe('Given ...', async () => {
  await beforeEach(async () => {
    const TestComponent = () => {
      const { tasks, loadTasks, addTask, updateTask } = useTasks();
      loadTasks();
      return (
        <>
          <h2>Test Component</h2>
          <button
            onClick={() => {
              addTask(addedTask);
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              updateTask();
            }}
          >
            update
          </button>
          <button>delete</button>
          {tasks.map((item) => {
            <p>{item.id}</p>;
          })}
        </>
      );
    };
    await render(<TestComponent></TestComponent>);
    test(`then it should be in the document`, () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
      let item = screen.getByText('34');
      expect(item).toBeInTheDocument();
      const;
    });
  });
});
