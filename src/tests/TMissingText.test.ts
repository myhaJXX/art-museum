const checkText = require('../utils/MissingText');

interface ICasesMissingText {
  str: string;
  key: string | null;
  expected: string;
}

describe('Mark test', () => {
  const testCases: ICasesMissingText[] = [
    {
      str: 'Smth',
      key: 'Title',
      expected: 'Smth',
    },
    {
      str: '',
      key: 'Description',
      expected: 'Description is missing...',
    },
  ];

  testCases.forEach(test => {
    it(`Case: (${test.str} - ${test.key}) | Must: ${test.expected}`, () => {
      const res: string = checkText(test.str, test.key);
      expect(res).toBe(test.expected);
    });
  });
});
