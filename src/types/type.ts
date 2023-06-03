interface User {
  name: string;
}

interface List {
  group: {
    name: string;
  }[];
  phonetic: string;
}

export { User, List };
