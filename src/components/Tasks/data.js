const generateFakeData = () =>
  Array(31)
    .fill(true)
    .map(_ => Math.random() < 0.5);

export const prepareData = (data = []) =>
  data.reduce(
    (acc, n, i) =>
      i % 7 === 0
        ? [...acc, [n]]
        : [...acc.slice(0, acc.length - 1), acc[acc.length - 1].concat(n)],
    []
  );

const TASKS_URL = "http://localhost:4000/auth/lol";

export const fetchData = async (setter = () => {}, failer = () => {}) => {
  const rawData = await fetch(TASKS_URL, { credentials: "include" });
  if (rawData.ok) {
    const data = await rawData.json();
    setter(data);
  } else {
    failer();
  }
};

export const fakeTasks = [
  {
    label: "Gym",
    description: "Go to the Gym",
    data: generateFakeData(),
    id: "id#Gym"
  },
  {
    label: "Read",
    description: "Read 10 pages",
    data: generateFakeData(),
    id: "id#Read"
  }
];
