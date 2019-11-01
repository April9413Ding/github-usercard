/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector(".cards");

axios.get("https://api.github.com/users/April9413Ding").then(response =>{
  const newCard = createCards(response.data.avatar_url,response.data.name,response.data.login,response.data.location,response.data.url,response.data.followers,response.data.following,response.data.bio)
  cards.appendChild(newCard);
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan","dustinmyers", "justsml","luishrd","bigknell"];

function addCards(array){
  array.forEach(item =>{
    axios.get(`https://api.github.com/users/${item}`).then(response =>{
      const newCard = createCards(response.data.avatar_url,response.data.name,response.data.login,response.data.location,response.data.url,response.data.followers,response.data.following,response.data.bio)
      cards.appendChild(newCard);
    });
  });
};

addCards(followersArray);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCards(imageUrl,userName,userID,location,link,followers,following,bio){
  const cardBox = document.createElement("div"),
  cardImg = document.createElement("img"),
  cardContent = document.createElement("div"),
  cardName = document.createElement("h3"),
  cardUserName = document.createElement("p"),
  cardLocation = document.createElement("p"),
  cardProfile = document.createElement("p"),
  cardLink = document.createElement("a"),
  cardFollowers = document.createElement("p"),
  cardFollowing = document.createElement("p"),
  cardBio = document.createElement("p");

  cardBox.appendChild(cardImg);
  cardBox.appendChild(cardContent);
  cardContent.appendChild(cardName);
  cardContent.appendChild(cardUserName);
  cardContent.appendChild(cardLocation);
  cardContent.appendChild(cardProfile);
  cardContent.appendChild(cardFollowers);
  cardContent.appendChild(cardFollowing);
  cardContent.appendChild(cardBio);
  cardProfile.appendChild(cardLink);

  cardBox.classList.add("card");
  cardContent.classList.add("card-info");
  cardName.classList.add("name");
  cardUserName.classList.add("username");

  cardImg.src = imageUrl;
  cardName.textContent = userName;
  cardUserName.textContent = userID;
  cardLocation.textContent = `Location: ${location}`;
  cardProfile.textContent = `Profile:`;
  cardLink.textContent = link;
  cardLink.href = link;
  cardFollowers.textContent = `Followers: ${followers}`;
  cardFollowing.textContent = `Following: ${following}`;
  cardBio.textContent = `Bio: ${bio}`;

  return cardBox;

};

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
