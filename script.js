const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName= '2306-FTB-MT-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(
            APIURL+'players'
        );

        const result = await response.json();
        console.log(result);
        return result.data.players;
        
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(
            APIURL + 'players/' + playerId
        );

          const result = await response.json();
          console.log(result);
            return result.data.player;
        
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(
            APIURL + 'players',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: playerObj
            }
          );
          const result = await response.json();
        console.log(result);
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {
        const response = await fetch(
            APIURL + 'players/' + playerId,
            {
              method: 'DELETE',
            }
          );
          const result = await response.json();
          console.log(result);
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 */
/* player, then adds that string to a larger string of HTML that represents all the players. */
 /* player, then adds that string to a larger string of HTML that represents all the players. 
 */ 
 
function generatePlayersHTML(players) {
    let htmlString = '';
    console.log(players);
    players.forEach(player => {
        htmlString += `
            <div class="player">
                <h2>${player.name}</h2>
                <p>Age: ${player.age}</p>
                <p>Team: ${player.team}</p>
            </div>
        `;
    });

    return htmlString;
}


//  * Then it takes that larger string of HTML and adds it to the DOM. 
//  */

// const newElement = document.createElement('div');
// newElement.textContent = htmlString;
// document.body.appendChild(newElement);

//  * It also adds event listeners to the buttons in each player card. 
//  */ 

// const button1 = document.querySelector('.btn')
// button1.addEventListener('click', function(event) {
//     console.log('click');
// })
//  * The event listeners are for the "See details" and "Remove from roster" buttons. 
//  * 
//  * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
// const seeDetails = document.querySelector('.btn')
// seeDetails.addEventListener('click', fetchSinglePlayer() 
//     );
//  * API to get the details for a single player. 
//  * 
//  * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
// const removeRoster = document.querySelector('.btn')
// removeRoster.addEventListener('click', removePlayer() 
//     );
//  * the API to remove a player from the roster. 
//  * 
//  * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
//  * @param playerList - an array of player objects
//  * @returns the playerContainerHTML variable.
//  */
const renderAllPlayers = (playerList) => {
    try {
        console.log(playerList);
        const playerContainer = document.getElementById('all-players-container');
        const ulElement = document.createElement('ul');
        
        playerList.forEach(eachPlayer => {
            const liElement = document.createElement('li');
            liElement.innerHTML = eachPlayer.name;
            ulElement.appendChild(liElement);
        })
        playerContainer.appendChild(ulElement);
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = (newPlayer) => {
    try {
        // const newForm = document.getElementById ('new-player-form');        
        //fetch(APIURL);
        // const form = document.createElement('form');
        
        // input.innerHTML = 
        // form.appendChild('input');
        // const fName = document.createElement('label');
        
        function createForm() {
            // Create form element
            const form = document.createElement('form');
            form.setAttribute('id', 'petForm');
            // form.setAttribute('action', '#'); // Modify this to your action URL
            // form.setAttribute('method', 'post');
    
            // Create name input
            const nameLabel = document.createElement('label');
            nameLabel.textContent = 'Name: ';
            const nameInput = document.createElement('input');
            nameInput.setAttribute('type', 'text');
            nameInput.setAttribute('name', 'Name');
            form.appendChild(nameLabel);
            nameLabel.appendChild(nameInput);
    
            // Create a line break
            form.appendChild(document.createElement('br'));
            form.appendChild(document.createElement('br'));
    
            // Create breed input
            const breedLabel = document.createElement('label');
            breedLabel.textContent = 'Breed: ';
            const breedInput = document.createElement('input');
            breedInput.setAttribute('type', 'text');
            breedInput.setAttribute('name', 'breed');
            form.appendChild(breedLabel);
            breedLabel.appendChild(breedInput);
    
            // Create a line break
            form.appendChild(document.createElement('br'));
            form.appendChild(document.createElement('br'));
    
            // Create submit button
            const submitButton = document.createElement('input');
            submitButton.setAttribute('type', 'submit');
            submitButton.setAttribute('value', 'Submit');
            form.appendChild(submitButton);
    
            // Append the form to the formContainer
            document.getElementById('new-player-form').appendChild(form);
        }
    
        // Call createForm function to generate the form
        createForm();
   

        response.json();
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    fetchSinglePlayer();
    renderNewPlayerForm();
    
}

init();