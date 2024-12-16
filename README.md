## WeatherWise App by Forecast Five

## Project Description
Our goal is to provide you with accurate weather information based on any given area. Our application within the website is called WeatherWise. 
We are aiming to address the problem of providing accurate weather information for specific locations, which is essential for users who want to stay 
informed about current and forecasted weather. To solve this information problem, our system will deliver timely weather updates for both daily and 
weekly forecasts based on user-selected locations.

## Target Browsers
WeatherWise is designed to be responsive and compatible across multiple platforms, offering seamless performance on:
- **Desktop Browsers:** Google Chrome, Mozilla Firefox, Microsoft Edge, Safari (latest versions)
- **Mobile Browsers:** iOS Safari (iOS 14+), Chrome for Android (Android 10+), Samsung Internet (latest version)

## Developer Manual
---
This Developer Manual provides the essential information to set up, run, and contribute to the **WeatherWise** app. Below, you’ll find instructions on how to get started, structure details, and key integrations that drive the application.

---

### Project Structure

The **WeatherWise** project follows a clean and modular structure to maintain clarity and ease of management. Here's the breakdown of the project files:

```
WeatherWise/
├── app.css               (styles the weather app)
├── about.html            (describes the team and app)
├── weather.html          (user interface for weather updates)
├── signing.html          (sign-in page for users)
├── signing.js            (handles customer account creation and data display)
├── home.html             (home page with weather images and FAQ)
├── README.md             (project description and setup instructions)
```

---

### Key Files

#### 1. **app.css**
This file contains all the necessary styles for the WeatherWise application. It ensures a consistent design across all pages, providing a professional and clean user interface.

- Styles the navigation bar and layout for all pages.
- Ensures consistency in the overall look and feel of the app.
- Responsively adapts the app to both desktop and mobile screens.

---

#### 2. **about.html**
The **about.html** page provides information about the development team and the WeatherWise project.

- Introduction to the WeatherWise project.
- A brief description of the team and its goals.
- Provides context for users about the development of the app.

---

#### 3. **weather.html**
The **weather.html** page allows users to view real-time weather updates. It integrates with a weather API and displays both current weather and forecasts.

- Search functionality for users to input a city or zip code.
- Displays current weather information (temperature, wind speed, humidity, etc.).
- Provides a 7-day weather forecast.
- Error handling for invalid input or API issues.

---

#### 4. **signing.html**
The **signing.html** page is dedicated to user authentication, allowing users to sign in or create an account. The form uses JavaScript to handle customer data and communicates with the backend (Supabase) to store and retrieve user information.

- Form to capture username and password for login.
- Links to the homepage and weather page upon successful login.
- Dynamic error messages for invalid credentials.

---

#### 5. **signing.js**
This JavaScript file handles customer account creation, login, and data display. It communicates with Supabase to manage user authentication and data storage.

- **Account Creation:** Allows users to sign up with their first name and last name.
- **Account Login:** Handles sign-in requests by validating user credentials.
- **Data Display:** Displays user data (such as usernames) after a successful login.

---

#### 6. **home.html**
The **home.html** page serves as the landing page of the app, including weather-related images and FAQs.

- Image slider that showcases weather-related pictures.
- FAQ section providing answers to common user questions.
- Navigation links to the weather page, about page, and sign-in page.

---

#### 7. **README.md**
The **README.md** file contains important documentation for developers, explaining how to set up, run, and manage the app.

---

### How to Run the WeatherWise App Locally

Follow these instructions to set up and run the WeatherWise app on your local machine:

#### Prerequisites:
- **Node.js** and **npm** installed on your machine.
- A **Supabase** account to manage and store user data.
- A **Weather API Key** to retrieve weather data.

#### Steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/yourusername/weatherwise.git
   cd weatherwise
   ```

2. **Install Dependencies:**
   Run the following command to install all necessary packages:
   ```
   npm install
   ```

3. **Set Up Supabase:**
   - Create an account at [Supabase](https://supabase.com).
   - Set up a new project and get the **Supabase URL** and **API key**.
   - Replace the `supabaseUrl` and `supabaseKey` values in the `index.js` file with your own credentials.

4. **Set Up Weather API:**
   - Sign up for an API key from [WeatherAPI](https://www.weatherapi.com/).
   - Update the `signing.js` file with your **Weather API Key**.

5. **Start the Server:**
   Run the following command to start the app locally:
   ```
   node index.js
   ```

6. **Open the App:**
   Open your browser and go to `http://localhost:3000` to use the app.

---

### API Integration

#### Weather API Integration
The app relies on the **Weather API** to fetch weather data for user-selected locations. The app makes requests to the API to retrieve current weather conditions and a 7-day forecast.

Example of Fetching Data:
```javascript
const weatherResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
const weatherData = await weatherResponse.json();
```

#### Supabase Integration
Supabase is used to handle user authentication and store user data. The app communicates with the Supabase API to create accounts and store user data (e.g., usernames and passwords).

Example of Inserting Data into Supabase:
```javascript
const { data, error } = await supabase
  .from('username')
  .insert({
    username: 'user123',
    password: 'password123',
  })
  .select();
```

---

### Notes for Developers

1. **Responsive Design:**
   WeatherWise is designed to work on both desktop and mobile platforms. The app should scale correctly on different screen sizes, from large desktop monitors to mobile phones.

2. **Error Handling:**
   The JavaScript functions include error handling to display messages to users when something goes wrong, such as if there is an issue with the API request or user authentication.

3. **Weather API Key:**
   Ensure you replace the placeholder in the `signing.js` file with your own **Weather API Key** to fetch weather data.

4. **Testing:**
   After setting up the app, test it thoroughly. Verify that the weather data loads correctly for different locations, the user can log in successfully, and the app displays weather forecasts as expected.

---

### Conclusion

The **WeatherWise** app provides an intuitive and responsive user interface for checking weather forecasts. This developer manual provides all the necessary steps and information to set up, manage, and contribute to the app. By following this guide, developers can easily maintain and extend the application.

---

