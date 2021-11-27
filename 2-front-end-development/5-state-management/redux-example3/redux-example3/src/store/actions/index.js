export const ADD_BOOKMARK = "ADD_BOOKMARK";

export const addBookmark = ({id, title, content}) => ({
    type: ADD_BOOKMARK,
    payload: {id, title, content}
})