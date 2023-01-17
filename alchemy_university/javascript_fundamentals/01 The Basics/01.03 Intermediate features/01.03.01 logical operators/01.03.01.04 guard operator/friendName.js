// && doubles as a guard to prevent exceptions caused by undefined objects.
// update function friendName to account for when friend is undefined to avoid throwing an exception
function friendName(friend) {
    // if friend does not exist undefined is returned, otherwise friend.name is returned
    return (friend && friend.name);
}

module.exports = friendName;