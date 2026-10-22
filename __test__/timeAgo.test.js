import { test } from 'node:test';
import assert from 'node:assert';
import { formatTimeAgo } from '../tasks/timeAgo.js';

const NOW = new Date('2026-10-22T14:00:00Z').getTime();
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const freeze = (t) => {
    t.mock.timers.enable({ apis: ['Date'], now: NOW });
};

const formatLocal = (date) =>
    [
        String(date.getDate()).padStart(2, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        date.getFullYear(),
    ].join('.');

test('formatTimeAgo: just now', (t) => {
    freeze(t);

    assert.strictEqual(formatTimeAgo(new Date(NOW)), 'just now');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 30 * SECOND)), 'just now');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 59 * SECOND)), 'just now');
});

test('formatTimeAgo: minutes ago', (t) => {
    freeze(t);

    assert.strictEqual(formatTimeAgo(new Date(NOW - 1 * MINUTE)), '1 minute ago');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 2 * MINUTE)), '2 minutes ago');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 5 * MINUTE)), '5 minutes ago');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 59 * MINUTE)), '59 minutes ago');
});

test('formatTimeAgo: hours ago', (t) => {
    freeze(t);

    assert.strictEqual(formatTimeAgo(new Date(NOW - 1 * HOUR)), '1 hour ago');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 2 * HOUR)), '2 hours ago');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 23 * HOUR)), '23 hours ago');
});

test('formatTimeAgo: yesterday', (t) => {
    freeze(t);

    assert.strictEqual(formatTimeAgo(new Date(NOW - 24 * HOUR)), 'yesterday');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 30 * HOUR)), 'yesterday');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 47 * HOUR)), 'yesterday');
});

test('formatTimeAgo: days ago', (t) => {
    freeze(t);

    assert.strictEqual(formatTimeAgo(new Date(NOW - 2 * DAY)), '2 days ago');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 3 * DAY)), '3 days ago');
    assert.strictEqual(formatTimeAgo(new Date(NOW - 6 * DAY)), '6 days ago');
});

test('formatTimeAgo: older than 7 days uses DD.MM.YYYY', (t) => {
    freeze(t);

    assert.strictEqual(formatTimeAgo(new Date(NOW - 7 * DAY)), formatLocal(new Date(NOW - 7 * DAY)));
    assert.strictEqual(formatTimeAgo(new Date(NOW - 30 * DAY)), formatLocal(new Date(NOW - 30 * DAY)));
    assert.strictEqual(formatTimeAgo(new Date(2023, 9, 12)), '12.10.2023');
    assert.strictEqual(formatTimeAgo(new Date(2024, 0, 5)), '05.01.2024');
});

test('formatTimeAgo: accepts a timestamp', (t) => {
    freeze(t);

    assert.strictEqual(formatTimeAgo(NOW - 5 * MINUTE), '5 minutes ago');
    assert.strictEqual(formatTimeAgo(NOW - 3 * DAY), '3 days ago');
});
