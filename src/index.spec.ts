import { convert } from './index';

describe('@robert.tools/convert', () => {
    it('should return a convert string', () => {
        expect(convert('hello')).toBe('convert: hello');
    });

    it('should return a convert string with empty input', () => {
        expect(convert('')).toBe('convert: ');
    });
});
