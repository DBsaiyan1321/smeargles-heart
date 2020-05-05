import React from "react";
import ReactDOM from "react-dom"; 
import configureStore from "./store/store";
import Root from "./components/root";

import * as LikeAPIUtil from "./actions/like_actions"; 
import * as CommentAPIUtil from "./actions/comment_actions";

document.addEventListener("DOMContentLoaded", () => { 
    let store;
    if (window.currentUser) { 
        const preloadedState = { 
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }, 
            session: { 
                id: window.currentUser.id
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser
    } else { 
        store = configureStore(); 
    }

    const root = document.getElementById("root")

    // testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchLikes = LikeAPIUtil.fetchLikes;
    window.createLike = LikeAPIUtil.createLike;
    window.deleteLike = LikeAPIUtil.deleteLike;

    window.fetchComments = CommentAPIUtil.fetchComments;
    window.createComment = CommentAPIUtil.createComment;
    window.updateComment = CommentAPIUtil.updateComment;
    window.deleteComment = CommentAPIUtil.deleteComment;
    // end of testing

    ReactDOM.render(<Root store={store} />, root)
});