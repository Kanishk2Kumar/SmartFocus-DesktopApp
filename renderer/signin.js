const supabase = window.supabase.createClient("https://rudeeqhxaomlmqpokpqt.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1ZGVlcWh4YW9tbG1xcG9rcHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0ODczOTAsImV4cCI6MjA2NjA2MzM5MH0.AMpbto_KBcnny3s8TW2greOXKMug7tsF9Om_ZmC4IP4");

console.log("Sign-In JS Loaded");
const loginBtn = document.getElementById('loginBtn');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

loginBtn.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Login failed: ' + error.message);
  } else {
    alert('Login successful!');
    // Redirect user or perform post-login logic
    window.location = "../pages/monitoring.html";
  }
});