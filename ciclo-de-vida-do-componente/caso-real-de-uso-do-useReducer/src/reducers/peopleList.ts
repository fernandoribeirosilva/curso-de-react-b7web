import { v4 as uuid4 } from "uuid";

type Person = {
  id: string;
  name: string;
};

type ReducerEstate = {
  type: "ADD" | "DEL" | "ORDER";
  payload?: {
    name?: string;
    id?: string;
  };
};

const initialState: Person[] = [];

const reducer = (state: Person[], action: ReducerEstate) => {
  switch (action.type) {
    case "ADD":
      if (action.payload?.name) {
        state.push({
          id: uuid4(),
          name: action.payload?.name,
        });
      }
      break;
    case "DEL":
      if (action.payload?.id) {
        state = state.filter((person) => person.id !== action.payload?.id);
      }
      break;
    case "ORDER":
      state = state.sort((previous, current) =>
        previous.name > current.name ? 1 : -1
      );
      break;
  }
  return state;
};
export const usePeopleList = () => {};
