import Vue from "vue";
import PhoneBook from "./phoneBook";
PhoneBook.install = (Vue) => Vue.component(PhoneBook.name, PhoneBook);
export default PhoneBook
