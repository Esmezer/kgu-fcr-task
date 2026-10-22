import { test } from 'node:test';
import assert from 'node:assert';
import { formatDate } from '../tasks/formatDate.js';

test('formatDate: full pattern', () => {
    assert.strictEqual(
        formatDate(new Date(2026, 9, 22, 14, 5), 'DD.MM.YYYY at HH:mm'),
        '22.10.2026 at 14:05'
    );
});

test('formatDate: pads single digit values', () => {
    assert.strictEqual(formatDate(new Date(2023, 0, 1, 0, 0), 'DD.MM.YYYY HH:mm'), '01.01.2023 00:00');
    assert.strictEqual(formatDate(new Date(2024, 8, 9, 7, 3), 'DD.MM.YYYY HH:mm'), '09.09.2024 07:03');
});

test('formatDate: month is zero-based in Date', () => {
    assert.strictEqual(formatDate(new Date(2026, 9, 22, 14, 5), 'MM'), '10');
    assert.strictEqual(formatDate(new Date(2026, 11, 31, 23, 59), 'DD.MM.YYYY HH:mm'), '31.12.2026 23:59');
});

test('formatDate: individual markers', () => {
    const date = new Date(2026, 9, 22, 14, 5);

    assert.strictEqual(formatDate(date, 'YYYY'), '2026');
    assert.strictEqual(formatDate(date, 'MM'), '10');
    assert.strictEqual(formatDate(date, 'DD'), '22');
    assert.strictEqual(formatDate(date, 'HH'), '14');
    assert.strictEqual(formatDate(date, 'mm'), '05');
});

test('formatDate: replaces every occurrence', () => {
    const date = new Date(2026, 9, 22, 14, 5);

    assert.strictEqual(formatDate(date, 'YYYY-YYYY'), '2026-2026');
    assert.strictEqual(formatDate(date, 'DD/MM/DD'), '22/10/22');
});

test('formatDate: leaves unknown text untouched', () => {
    const date = new Date(2026, 9, 22, 14, 5);

    assert.strictEqual(formatDate(date, 'Hello, world!'), 'Hello, world!');
    assert.strictEqual(formatDate(date, 'DD month'), '22 month');
});
