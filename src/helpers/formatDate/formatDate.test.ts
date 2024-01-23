import { formatDate } from './formatDate';

describe('formatDate', () => {
  test('with standard date params format', () => {
    expect(formatDate('2024-01-10T15:45:00')).toBe('10/01/2024');
  });

  test('with wrong date params format', () => {
    expect(formatDate('202445-1101-10T15')).toBe('../../..');
  });
});
