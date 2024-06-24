const input = document.getElementById("username");
const button = document.getElementById("button");
const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileRepos = document.getElementById("profileRepos");
const profileFollowers = document.getElementById("profileFollowers");
const profileFollowing = document.getElementById("profileFollowing");

button.addEventListener("click", async () => {
  const username = input.value;
  if (username) {
    const profile = await getGithubProfile(username);
    profileImage.src = profile.avatar_url;
    profileName.textContent = profile.name;
    profileBio.textContent = profile.bio;
    profileRepos.textContent = profile.public_repos;
    profileFollowers.textContent = profile.followers;
    profileFollowing.textContent = profile.following;

    console.log(profile);
  }
});

async function getGithubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));

  return response;
}
