/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';
// let me = axios.get('https://api.github.com/users/michael-maton');
// let myCard = cardMaker(me);
  // .this((res) => {
  //   console.log(res);
  // })
axios
  .get('https://api.github.com/users/michael-maton')
  .then((res) => {
    let myCard = cardMaker(res);
    cards.appendChild(myCard);
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

const cards = document.querySelector('.cards');

function cardMaker (dataObj){

  let card = document.createElement('div');
  card.className = 'card';
  let imgSrc = document.createElement('img');
  imgSrc.src = dataObj.data.avatar_url;
  let cardInfo = document.createElement('div');
  cardInfo.className = 'card-info';
  let nameElement = document.createElement('h3');
  nameElement.className = 'name';
  nameElement.textContent = dataObj.data.name;
  let username = document.createElement('p');
  username.className = 'username';
  username.textContent = dataObj.data.login;
  let userLocation = document.createElement('p');
  userLocation.textContent = `Location: ${dataObj.data.location}`;
  let userProfile = document.createElement('p');
  userProfile.textContent = 'Profile: ';
  let address = document.createElement('a');
  address.href = dataObj.data.url;
  address.textContent = dataObj.data.url;
  let userFollowers = document.createElement('p');
  userFollowers.textContent = `Followers: ${dataObj.data.followers}`;
  let userFollowing = document.createElement('p');
  userFollowing.textContent = `Following: ${dataObj.data.following}`;
  let userBio = document.createElement('p');
  userBio.textContent = `Bio: ${dataObj.data.bio}`;

  card.appendChild(imgSrc);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameElement);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  userProfile.appendChild(address);
  console.log(card);

  return card;
}




// function cardMaker (dataObj){

//   let card = document.createElement('div');
//   card.className = 'card';
//   let imgSrc = document.createElement('img');
//   let cardInfo = document.createElement('div');
//   cardInfo.className = 'card-info';
//   let nameElement = document.createElement('h3');
//   nameElement.className = 'name';
//   let username = document.createElement('p');
//   username.className = 'username';
//   let userLocation = document.createElement('p');
//   userLocation.textContent = `Location: `;
//   let userProfile = document.createElement('p');
//   userProfile.textContent = 'Profile: ';
//   let address = document.createElement('a');
//   let userFollowers = document.createElement('p');
//   userFollowers.textContent = `Followers: `;
//   let userFollowing = document.createElement('p');
//   userFollowing.textContent = `Following: `;
//   let userBio = document.createElement('p');
//   userBio.textContent = `Bio: `;

//   card.appendChild(imgSrc);
//   card.appendChild(cardInfo);
//   cardInfo.appendChild(nameElement);
//   cardInfo.appendChild(username);
//   cardInfo.appendChild(userLocation);
//   cardInfo.appendChild(userProfile);
//   cardInfo.appendChild(userFollowers);
//   cardInfo.appendChild(userFollowing);
//   cardInfo.appendChild(userBio);
//   userProfile.appendChild(address);
//   console.log(card);

//   return card;
// }



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
