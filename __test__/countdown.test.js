import { test } from 'node:test';
import assert from 'node:assert';
import { getCountdown } from '../tasks/countdown.js';

const NOW = new Date('2026-10-22T14:00:00Z').getTime();
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const freeze = (t) => {
    t.mock.timers.enable({ apis: ['Date'], now: NOW });
};

const offset = ({ days = 0, hours = 0, minutes = 0, seconds = 0, ms = 0 }) =>
    new Date(NOW + (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000 + ms);

test('getCountdown: full breakdown', (t) => {
    freeze(t);

    assert.deepStrictEqual(getCountdown(offset({ days: 2, hours: 5, minutes: 14, seconds: 33 })), {
        days: 2,
        hours: 5,
        minutes: 14,
        seconds: 33,
    });
});

test('getCountdown: single units', (t) => {
    freeze(t);

    assert.deepStrictEqual(getCountdown(offset({ seconds: 45 })), {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 45,
    });
    assert.deepStrictEqual(getCountdown(offset({ minutes: 1 })), {
        days: 0,
        hours: 0,
        minutes: 1,
        seconds: 0,
    });
    assert.deepStrictEqual(getCountdown(offset({ hours: 3 })), {
        days: 0,
        hours: 3,
        minutes: 0,
        seconds: 0,
    });
    assert.deepStrictEqual(getCountdown(offset({ days: 10 })), {
        days: 10,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
});

test('getCountdown: floors partial units', (t) => {
    freeze(t);

    assert.deepStrictEqual(getCountdown(offset({ hours: 1, minutes: 30, seconds: 45, ms: 999 })), {
        days: 0,
        hours: 1,
        minutes: 30,
        seconds: 45,
    });
});

test('getCountdown: hours do not exceed 23', (t) => {
    freeze(t);

    assert.deepStrictEqual(getCountdown(offset({ days: 1, hours: 25, minutes: 61, seconds: 61 })), {
        days: 2,
        hours: 2,
        minutes: 2,
        seconds: 1,
    });
});

test('getCountdown: past date returns zeros', (t) => {
    freeze(t);

    assert.deepStrictEqual(getCountdown(offset({ seconds: -1 })), {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    assert.deepStrictEqual(getCountdown(new Date(NOW - 5 * DAY)), {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
});
