import PhoneBook from "./components/phoneBook.js";

const compoents = [PhoneBook];

const install = (Vue) => {
  compoents.map((e) => {
    Vue.component(e.name, e);
  });
};

export default {
  install,
  PhoneBook,
};
