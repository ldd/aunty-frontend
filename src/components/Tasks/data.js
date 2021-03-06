import { BACKEND_URL } from "../Login";

export const generateFakeData = () =>
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

const TASKS_URL = `${BACKEND_URL}/v1/tasks`;

export const fetchData = async (
  setter = () => {},
  failer = () => {},
  url = TASKS_URL,
  options = {}
) => {
  const rawData = await fetch(url, {
    credentials: "include",
    ...options
  });
  if (rawData.ok) {
    const data = await rawData.json();
    setter(data);
  } else {
    failer();
  }
};

export const deleteTask = async (id = -1, setter, failer) =>
  fetchData(setter, failer, `${TASKS_URL}/${id}`, { method: "DELETE" });

export const addTask = async (body, setter, failer) =>
  fetchData(setter, failer, undefined, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  });

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
