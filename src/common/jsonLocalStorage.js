/**
 * work with local storage of browser with json parse
 */
export default new class jsonLocalStorage
{
  /**
   * get item with key
   *
   * @param key
   * @return {string|Object}
   */
  getItem(key)
  {
    let value = '';

    if (localStorage.getItem(key))
      value = JSON.parse(localStorage.getItem(key));

    return value;
  }

  /**
   * set an object item to local storage
   *
   * @param key String
   * @param value Object
   */
  setItem(key, value)
  {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * remove an item from local storage
   *
   * @param key String
   */
  removeItem(key)
  {
    localStorage.removeItem(key);
  }
}