const assert = require('chai').assert;
import randomContents from './../src/common/randomContent';

describe('Random Content Test', function () {
  it('remove repetitious item that user read before', function () {
    let items = [
      {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}
    ];

    randomContents.setContent(items, 'test-repetitious');
    let content1 = randomContents.getRandomContent();
    let content2 = randomContents.getRandomContent();
    let content3 = randomContents.getRandomContent();

    assert.notInclude(randomContents.contents, content1);
    assert.notInclude(randomContents.contents, content2);
    assert.notInclude(randomContents.contents, content3);
  });
});