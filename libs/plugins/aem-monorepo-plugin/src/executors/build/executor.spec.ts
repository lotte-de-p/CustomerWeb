import { BuildExecutorSchema } from './schema';
import executor from './executor';

const options: BuildExecutorSchema = {};

describe('Build Executor', () => {
  it('can run', async () => {
    jest.spyOn(console, 'log').mockImplementation(jest.fn);
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
