import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from 'redux/contactsSlice';
import { filterSlice } from 'redux/filterSlice';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    // contacts: persistedContactsReducer,
  },
});

// export const persistor = persistStore(store);
