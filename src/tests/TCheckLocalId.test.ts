import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const checkLocalIds = require('../utils/checkLocalId');

interface ICasesCheckId {
  isId: number;
  isIds: number[];
  expected: boolean;
}

describe('Mark test', () => {
  const testCases: ICasesCheckId[] = [
    {
      isId: 0,
      isIds: [0, 1, 2],
      expected: true,
    },
    {
      isId: 52,
      isIds: [152, 252, 52],
      expected: true,
    },
    {
      isId: 0,
      isIds: [],
      expected: false,
    },
  ];

  testCases.forEach(test => {
    it(`Case: (${test.isId} - [${test.isIds}]) | Must: [${test.expected}]`, () => {
      const res: boolean = checkLocalIds(test.isId, test.isIds);
      expect(res).toBe(test.expected);
    });
  });
});
