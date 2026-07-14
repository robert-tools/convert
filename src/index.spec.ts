import {
    absoluteUrl,
    cleanSpaces,
    convert2KeyValue,
    convertKey2CamelCase,
    convertNumber2String,
    normalizeText,
} from './index';

describe('✅ convertNumber2String()', () => {
    const FN = convertNumber2String;
    it('should return number string for integer', () => {
        expect(FN(123)).toEqual('123');
        expect(FN(0)).toEqual('0');
        expect(FN(-1)).toEqual('-1');
    });
    it('should return number string for float', () => {
        expect(FN(123.456)).toEqual('123.456');
        expect(FN(0.123)).toEqual('0.123');
        expect(FN(-1.234)).toEqual('-1.234');
    });
    it('should return number string for negative float', () => {
        expect(FN(-123.456)).toEqual('-123.456');
        expect(FN(-0.123)).toEqual('-0.123');
        expect(FN(-1.234)).toEqual('-1.234');
    });
});
describe('🚧 convertLine2KeyValue()', () => {
    const FN = convert2KeyValue;
    describe('split line with colon', () => {
        it('should split line with simple key/value', () => {
            const INPUT = 'KEY: value';
            const EXPECTED = { key: 'KEY', value: 'value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with multiple values', () => {
            const INPUT = 'KEY: multiple value';
            const EXPECTED = { key: 'KEY', value: 'multiple value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with multiple values with colon', () => {
            const INPUT = 'KEY: multiple: value';
            const EXPECTED = { key: 'KEY', value: 'multiple: value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with key with dash', () => {
            const INPUT = 'KEY-XX: value';
            const EXPECTED = { key: 'KEY-XX', value: 'value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with key with dash and multiple values', () => {
            const INPUT = 'KEY-XX: multiple value';
            const EXPECTED = { key: 'KEY-XX', value: 'multiple value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with key with dash and multiple values with colon', () => {
            const INPUT = 'KEY-XX: multiple: value';
            const EXPECTED = { key: 'KEY-XX', value: 'multiple: value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
    });
    describe('split line without colon', () => {
        it('should split line with simple key/value', () => {
            const INPUT = 'KEY value';
            const EXPECTED = { key: 'KEY', value: 'value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with multiple values', () => {
            const INPUT = 'KEY multiple value';
            const EXPECTED = { key: 'KEY', value: 'multiple value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with multiple values with colon', () => {
            const INPUT = 'KEY multiple: value';
            const EXPECTED = { key: 'KEY', value: 'multiple: value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with key with dash', () => {
            const INPUT = 'KEY-XX value';
            const EXPECTED = { key: 'KEY-XX', value: 'value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with key with dash and multiple values', () => {
            const INPUT = 'KEY-XX multiple value';
            const EXPECTED = { key: 'KEY-XX', value: 'multiple value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with key with dash and multiple values with colon', () => {
            const INPUT = 'KEY-XX multiple: value';
            const EXPECTED = { key: 'KEY-XX', value: 'multiple: value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
        it('should split line with key with dash and multiple values with colon after first space', () => {
            const INPUT = 'KEY-XX multiple: value';
            const EXPECTED = { key: 'KEY-XX', value: 'multiple: value' };
            expect(FN(INPUT)).toEqual(EXPECTED);
        });
    });
});
describe('✅ convertKey2CamelCase()', () => {
    const FN = convertKey2CamelCase;
    it('should transform key', () => {
        expect(FN('HTTP/1.1')).toEqual('http/1.1');
        expect(FN('Location')).toEqual('location');
        expect(FN('location')).toEqual('location');
        expect(FN('Content-Type')).toEqual('contentType');
        expect(FN('content-type')).toEqual('contentType');
        expect(FN('X-Frame-Options')).toEqual('xFrameOptions');
    });
});
describe('✅ normalizeText()', () => {
    const FN = normalizeText;
    it('should normalize text', () => {
        expect(FN('')).toEqual('');
        expect(FN(' ')).toEqual('');
        expect(FN('  ')).toEqual('');
        expect(FN('ÀÁÂÃÄÅ')).toEqual('aaaaaa');
        expect(FN('àáâãäå')).toEqual('aaaaaa');
        expect(FN('ÈÉÊË')).toEqual('eeee');
        expect(FN('èéêë')).toEqual('eeee');
        expect(FN('ÌÍÎÏ')).toEqual('iiii');
        expect(FN('ìíîï')).toEqual('iiii');
        expect(FN('ÒÓÔÕÖØ')).toEqual('oooooo');
        expect(FN('òóôõöø')).toEqual('oooooo');
        expect(FN('ÙÚÛÜ')).toEqual('uuuu');
        expect(FN('ùúûü')).toEqual('uuuu');
        expect(FN('ÝŸ')).toEqual('yy');
        expect(FN('ýÿ')).toEqual('yy');
    });
});
describe('✅ cleanSpaces()', () => {
    const FN = cleanSpaces;
    it('should clean the space in a value', () => {
        expect(FN('')).toEqual('');
        expect(FN('  ')).toEqual('');
        expect(FN(' x ')).toEqual('x');
        expect(FN(' x y ')).toEqual('x y');
        expect(FN(' x  y ')).toEqual('x y');
    });
});
describe('absoluteUrl()', () => {
    const FN = absoluteUrl;
    const base = 'https://example.com';
    it('should return absolute url', () => {
        expect(FN('/path', base)).toEqual(`${base}/path`);
        expect(FN('path', base)).toEqual(`${base}/path`);
        expect(FN(`${base}/path`, base)).toEqual(`${base}/path`);
        expect(FN('http://example.com/path', base)).toEqual(
            'http://example.com/path'
        );
    });
});
