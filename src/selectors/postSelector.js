export const filterPost = (posts,id) => {
    return posts.filter(post => post.userId === parseInt(id))
}

export const findPost =(posts,id) => {
    return posts.find(post => post.id === parseInt(id)) 
}