// Waitress' coments on dish selection:
export const commentList = [
    "Great option!",
    "You will love it!",
    "Incredible!",
    "My favorite one!",
    "Nice, I'm adding that to your order."
]

export const waitressComment = () => {
    return commentList[Math.floor(Math.random() * commentList.length)];
}
