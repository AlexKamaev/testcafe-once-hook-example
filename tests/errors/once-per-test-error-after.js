import { oncePerTest } from 'testcafe-once-hook';

fixture `once-per-test-error-after`
    .page `http://localhost:3000`
    .afterEach(oncePerTest(async t => {
        await t.click('#non-existing-element');
    }));

test('check two posts 1', async t => {
    await t.wait(100);
});

test('check two posts 2', async t => {
    await t.wait(100);
});

test('check two posts 3', async t => {
    await t.wait(100);
});
