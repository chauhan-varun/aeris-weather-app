# Aeris Weather App

<p align="center">
  <img src="./public/logo2.png" alt="Aeris Logo" width="100" />
</p>

Aeris is a modern weather application built with React and TanStack Query that provides real-time weather data and forecasts for cities worldwide. The app features a responsive design with both light and dark mode support.

## Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Weather Forecasts**: View detailed 5-day forecasts
- **City Search**: Search for cities around the world
- **Weather Statistics**: View detailed weather metrics like humidity, wind speed, and more
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Switch between themes based on your preference

## Technologies Used

- **React** - Frontend library
- **TypeScript** - Static typing
- **TanStack Query** - Data fetching and state management
- **React Router** - Navigation management
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Vite** - Build tool

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Setup

1. Clone the repository

```bash
git clone https://github.com/chauhan-varun/aeris-weather-app.git
cd aeris-weather-app
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your API keys

```
VITE_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Docker (Local)

Build and run the Docker image locally:

```bash
docker build -t aeris-weather-app .
docker run -p 5173:5173 aeris-weather-app
```

## Usage

- **Search for a City**: Use the search bar to find weather data for specific cities
- **View Forecast**: Click on a city to see detailed forecast information
- **Toggle Theme**: Use the theme toggle in the header to switch between light and dark modes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Weather data provided by Open Weather
- Icons by Lucid-react
