import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

// export interface RootState {
//   movies: MoviesState;
// }

const store = createStore(rootReducer);

export default store;
