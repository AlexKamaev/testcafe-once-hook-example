import { oncePerFixture } from 'testcafe-once-hook';

const afterHook = oncePerFixture(async t => {
    throw new Error();
});

fixture `once-per-fixture-error-after`
    .page `http://localhost:3000`
    .afterEach(afterHook);

test('check two posts 1', async t => {
    await t.wait(1000);
});

test('check two posts 2', async t => {
    await t.wait(1000);
});

test('check two posts 3', async t => {
    await t.wait(1000);
});
