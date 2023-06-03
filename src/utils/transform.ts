import { pinyin } from "pinyin-pro";
import { List, User } from "../types/type";
export const transform = (users: Array<User>): Array<List> => {
  const list: Array<List> = [];
  // 26个英文字母大写
  const letters: Array<string> = Array.from(new Array(26), (ele, index) =>
    String.fromCharCode(65 + index)
  );

  const newUsers = users.map((user) => {
    const phonetic = pinyin(user.name, {
      pattern: "first",
      toneType: "none",
      type: "array",
    });

    return {
      name: user.name,
      phonetic: phonetic.length ? phonetic[0] : "",
    };
  });

  for (const letter of letters) {
    const group: Array<User> = [];
    const obj = {
      phonetic: letter,
      group,
    };

    for (const element of newUsers) {
      const { phonetic, name } = element;
      if (phonetic === letter || phonetic.toUpperCase() === letter) {
        obj.group.push({ name });
      }
    }

    list.push(obj);
  }

  // 筛选出特殊字符
  const special = newUsers.filter(
    (user) =>
      !(
        letters.includes(user.phonetic) ||
        letters.includes(user.phonetic.toUpperCase())
      )
  );

  list.unshift({
    phonetic: "特殊字符",
    group: special,
  });
  return list
};
