import {configureStore} from "@reduxjs/toolkit";

import {UserApi} from "./services/User";
import {CategoryApi} from "./services/Category";

export const store = configureStore({
    reducer: {
        [UserApi.reducerPath]: UserApi.reducer,
        [CategoryApi.reducerPath]: CategoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        UserApi.middleware,
        CategoryApi.middleware
    ])
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch