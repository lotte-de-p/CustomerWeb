import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './stateGenerator';
import { StateGeneratorSchema } from './schema';
import { Linter } from '@nx/linter';
import { libraryGenerator, UnitTestRunner } from '@nrwl/angular/generators';

describe('state generator', () => {
  let libTree: Tree;
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn);
    libTree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  describe(`When no facade should be generated`, () => {
    it('should generate the ngrx state files', async () => {
      const options: StateGeneratorSchema = { name: 'test', project: 'test-lib', facade: false };
      await libraryGenerator(libTree, {
        linter: Linter.EsLint,
        name: 'test-lib',
        skipFormat: true,
        style: 'scss',
        skipTests: true,
        unitTestRunner: UnitTestRunner.None,
      });
      await generator(libTree, options);
      const config = readProjectConfiguration(libTree, 'test-lib');
      expect(config).toBeDefined();

      expect(libTree.read('libs/test-lib/src/lib/+state/test-ngrx.module.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.state.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.selectors.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.reducer.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.effects.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.effects.spec.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.actions.ts', 'utf-8')).toMatchSnapshot();

      expect(libTree.exists('libs/test-lib/src/lib/+state/test.facade.ts')).toBe(false);
      expect(libTree.exists('libs/test-lib/src/lib/+state/test.facade.spec.ts')).toBe(false);
    });

    it(`should throw an exception if the project can't be found`, async () => {
      const options: StateGeneratorSchema = { name: 'test', project: 'unexisting-lib', facade: false };
      await libraryGenerator(libTree, {
        linter: Linter.EsLint,
        name: 'test-lib',
        skipFormat: true,
        style: 'scss',
        skipTests: true,
        unitTestRunner: UnitTestRunner.None,
      });
      try {
        await generator(libTree, options);
        fail('An exception should have been thrown');
      } catch (error) {
        expect(error).toEqual(new Error(`No project configuration found for project 'unexisting-lib'`));
      }
    });
  });
  describe(`When a facade should be generated`, () => {
    it('should generate the ngrx state files', async () => {
      const options: StateGeneratorSchema = { name: 'test', project: 'test-lib', facade: true };
      await libraryGenerator(libTree, {
        linter: Linter.EsLint,
        name: 'test-lib',
        skipFormat: true,
        style: 'scss',
        skipTests: true,
        unitTestRunner: UnitTestRunner.None,
      });
      await generator(libTree, options);
      const config = readProjectConfiguration(libTree, 'test-lib');
      expect(config).toBeDefined();

      expect(libTree.read('libs/test-lib/src/lib/+state/test-ngrx.module.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.state.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.selectors.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.reducer.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.effects.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.effects.spec.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.actions.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.facade.ts', 'utf-8')).toMatchSnapshot();
      expect(libTree.read('libs/test-lib/src/lib/+state/test.facade.spec.ts', 'utf-8')).toMatchSnapshot();
    });

    it(`should throw an exception if the project can't be found`, async () => {
      const options: StateGeneratorSchema = { name: 'test', project: 'unexisting-lib', facade: true };
      await libraryGenerator(libTree, {
        linter: Linter.EsLint,
        name: 'test-lib',
        skipFormat: true,
        style: 'scss',
        skipTests: true,
        unitTestRunner: UnitTestRunner.None,
      });
      try {
        await generator(libTree, options);
        fail('An exception should have been thrown');
      } catch (error) {
        expect(error).toEqual(new Error(`No project configuration found for project 'unexisting-lib'`));
      }
    });
  });
});
