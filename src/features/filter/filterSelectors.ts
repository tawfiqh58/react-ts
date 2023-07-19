import { Store } from '../../types/Store';

export const selectFilter = (state: Store) => state.filters?.watchStatus;
