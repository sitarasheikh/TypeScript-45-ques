// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Make a list of current users
let current_users: string[] = ['john', 'jane', 'eric', 'alice', 'sam'];

// Make a list of new users
let new_users: string[] = ['JOHN', 'jane', 'charlie', 'daniel', 'sam'];

// Loop through new users and check if they are already in use
for (let new_user of new_users) {
    // Check if the new user is in the current users list (case insensitive)
    let found: boolean = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            found = true;
            break;
        }
    }
    
    // Print a message depending on whether the username is already in use
    if (found) {
        console.log(`The username '${new_user}' is already in use. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}
