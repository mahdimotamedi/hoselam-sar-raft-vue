import jsonLocalStorage from './jsonLocalStorage'
import { randomNumber } from "../common/utilities"

/**
 * this class use for select a non repetitive content
 * from an array with help of local storage
 */
export default new class randomContent
{
  /**
   * set contents to class
   *
   * @param contents Array
   * @param contentName String
   */
  setContents(contents, contentName)
  {
    this.contents = contents;
    this.contentName = contentName;
  }

  /**
   * get a random item (delete read items first)
   *
   * @return Object
   */
  getRandomContent()
  {
    if (!this.contents || !this.contentName)
      throw new Error("Please set content first");

    let readItems = jsonLocalStorage.getItem(this.contentName);
    if (!readItems)
      readItems = [];

    if (this.contents.length <= readItems.length) {
      jsonLocalStorage.removeItem(this.contentName);
      readItems = [];
    }

    // delete read items
    this.contents = this.contents.filter((content) => {
      let read = true;
      readItems.forEach((item) => {
        if (content.id === item)
          read = false;
      });

      return read;
    });

    let content = this.contents[randomNumber(0, this.contents.length - 1)];
    readItems.push(content.id);
    jsonLocalStorage.setItem(this.contentName ,readItems);

    return content;
  }
}