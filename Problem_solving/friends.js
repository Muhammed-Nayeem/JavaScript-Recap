// Find the friend with the smallest name.
const friends = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(friends) {
  let smallName = friends[0];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length < smallName.length) {
      smallName = friends[i];
    }
  }
  return smallName;
}

const smallestFriendName = smallestName(friends);
console.log("Smallest friend name: ", smallestFriendName);
