// import { Client, Account } from 'appwrite';
// appwrite project id 6720a9f600118c7e4b11
// NewsHuntDB id 6720ab7900248f530dd4
// users collection id 6720ad560002cff59663
// Initialize Appwrite Client and Account
const client = new Appwrite.Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite endpoint
  .setProject('6720a9f600118c7e4b11'); // project ID

const account = new Appwrite.Account(client);

document.getElementById("signup")?.addEventListener("click",async (e) => {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const country = document.getElementById("country").value;
  const language = document.getElementById("language").value;
  if(localStorage.getItem("userData")){
    await account.deleteSession('current')
  }
  signup(name, email, password, country, language);
});

document.getElementById("login")?.addEventListener("click",async (e)=>{
  e.preventDefault()
  const email=document.getElementById("loginEmail").value
  const password=document.getElementById("loginPassword").value
  if(localStorage.getItem("userData")){
    await account.deleteSession('current')
  }
  login(email,password)
})

document.getElementById("logout")?.addEventListener("click",async (e)=>{
  e.preventDefault()
  try {
    await account.deleteSession('current')
    localStorage.removeItem('userData');
    window.location.href="/NewsHunt/login.html"
  } catch (error) {
    alert("Logout Failed")
  }
})

function signup(name, email, password, country, language) {
  let userId; 
  account.create('unique()', email, password, name)
    .then(response => {
      userId = response.$id; // Store the user ID
      // Log in the user to establish a session
      return account.createEmailPasswordSession(email, password);
    })
    .then(sessionResponse => {
      return account.updatePrefs({ country, language });
    })
    .then(prefResponse => {
      const userData = {
        userId: userId,
        name: name,
        email: email,
        language: language,
        country: country,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000 // Set expiration time for 7 days
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      window.location.href="/NewsHunt/"
    })
    .catch(error => {
      // If any error occurs, delete the created user
      if (userId) {
        account.deleteIdentity(userId)
          .then(() => console.log('User deleted due to signup error.'))
          .catch(deleteError => console.error('Error deleting user:', deleteError.message));
      }
      alert(error.message);
    });
}


// Login function
function login(email, password) {
  account.createEmailPasswordSession(email, password)
    .then(response => {
      console.log('User logged in successfully:', response);

      // Fetch and store user preferences
      account.get()
        .then(user => {
          const userData = {
            userId: user.$id,
            name: user.name,
            email: user.email,
            language: user.prefs.language,
            country: user.prefs.country,
            expires: Date.now() + 7 * 24 * 60 * 60 * 1000 // Set expiration time for 7 days
          };
          localStorage.setItem('userData', JSON.stringify(userData));
          window.location.href = "/NewsHunt/";
        });
    })
    .catch(error => {
      alert(error.message);
    });
}
