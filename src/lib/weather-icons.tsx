import { 
  Sun, 
  Moon, 
  Cloud, 
  CloudDrizzle, 
  CloudRain, 
  CloudSnow, 
  CloudFog, 
  CloudLightning, 
  Cloudy
} from "lucide-react";

interface WeatherIconProps {
  iconCode: string;
  className?: string;
  size?: number;
}

// Function to get the appropriate icon based on OpenWeatherMap icon code
export function WeatherIcon({ iconCode, className, size = 24 }: WeatherIconProps) {
  // Map OpenWeatherMap icon codes to Lucide icons
  const iconMap: Record<string, React.ElementType> = {
    // Clear sky
    "01d": Sun, // day
    "01n": Moon, // night
    
    // Few clouds
    "02d": Cloudy,
    "02n": Cloudy,
    
    // Scattered clouds
    "03d": Cloud,
    "03n": Cloud,
    
    // Broken clouds
    "04d": Cloud,
    "04n": Cloud,
    
    // Shower rain
    "09d": CloudDrizzle,
    "09n": CloudDrizzle,
    
    // Rain
    "10d": CloudRain,
    "10n": CloudRain,
    
    // Thunderstorm
    "11d": CloudLightning,
    "11n": CloudLightning,
    
    // Snow
    "13d": CloudSnow,
    "13n": CloudSnow,
    
    // Mist
    "50d": CloudFog,
    "50n": CloudFog,
  };
  
  const IconComponent = iconMap[iconCode] || Cloud; // Default to Cloud if icon not found
  
  return <IconComponent className={className} size={size} />;
}
