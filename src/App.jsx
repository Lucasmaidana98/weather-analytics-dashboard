import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, Eye, Thermometer, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import './App.css';

// Mock data for the dashboard
const weatherData = {
  current: {
    location: "Buenos Aires, Argentina",
    temperature: 24,
    condition: "Partly Cloudy",
    icon: "partly-cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    pressure: 1015,
    uvIndex: 6,
    feelsLike: 27
  },
  forecast: [
    { day: 'Mon', high: 26, low: 18, condition: 'sunny' },
    { day: 'Tue', high: 23, low: 16, condition: 'cloudy' },
    { day: 'Wed', high: 21, low: 14, condition: 'rainy' },
    { day: 'Thu', high: 19, low: 12, condition: 'rainy' },
    { day: 'Fri', high: 22, low: 15, condition: 'cloudy' },
    { day: 'Sat', high: 25, low: 17, condition: 'sunny' },
    { day: 'Sun', high: 28, low: 20, condition: 'sunny' }
  ],
  hourlyData: [
    { time: '00:00', temp: 20, humidity: 70 },
    { time: '03:00', temp: 18, humidity: 75 },
    { time: '06:00', temp: 19, humidity: 72 },
    { time: '09:00', temp: 22, humidity: 68 },
    { time: '12:00', temp: 25, humidity: 60 },
    { time: '15:00', temp: 27, humidity: 55 },
    { time: '18:00', temp: 26, humidity: 58 },
    { time: '21:00', temp: 23, humidity: 65 }
  ],
  precipitation: [
    { month: 'Jan', rainfall: 120 },
    { month: 'Feb', rainfall: 100 },
    { month: 'Mar', rainfall: 80 },
    { month: 'Apr', rainfall: 60 },
    { month: 'May', rainfall: 40 },
    { month: 'Jun', rainfall: 20 },
    { month: 'Jul', rainfall: 15 },
    { month: 'Aug', rainfall: 25 },
    { month: 'Sep', rainfall: 45 },
    { month: 'Oct', rainfall: 75 },
    { month: 'Nov', rainfall: 95 },
    { month: 'Dec', rainfall: 110 }
  ],
  weatherDistribution: [
    { name: 'Sunny', value: 40, color: '#FFD700' },
    { name: 'Cloudy', value: 30, color: '#87CEEB' },
    { name: 'Rainy', value: 20, color: '#4682B4' },
    { name: 'Stormy', value: 10, color: '#2F4F4F' }
  ]
};

const WeatherIcon = ({ condition, size = 24 }) => {
  const iconMap = {
    sunny: Sun,
    cloudy: Cloud,
    rainy: CloudRain,
    snowy: CloudSnow,
    'partly-cloudy': Cloud
  };
  const Icon = iconMap[condition] || Sun;
  return <Icon size={size} className="text-yellow-400" />;
};

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Cloud size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Weather Analytics
                </h1>
                <p className="text-gray-400">Advanced meteorological dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar size={20} />
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Current Weather Card */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <MapPin size={24} className="text-blue-400" />
              <span className="text-xl font-semibold">{weatherData.current.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <WeatherIcon condition={weatherData.current.icon} size={32} />
              <span className="text-gray-300">{weatherData.current.condition}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">{weatherData.current.temperature}°</div>
              <div className="text-gray-300">Temperature</div>
              <div className="text-sm text-gray-400">Feels like {weatherData.current.feelsLike}°</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets size={20} className="text-blue-400" />
                  <span className="text-gray-300">Humidity</span>
                </div>
                <span className="font-semibold">{weatherData.current.humidity}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Wind size={20} className="text-green-400" />
                  <span className="text-gray-300">Wind Speed</span>
                </div>
                <span className="font-semibold">{weatherData.current.windSpeed} km/h</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye size={20} className="text-purple-400" />
                  <span className="text-gray-300">Visibility</span>
                </div>
                <span className="font-semibold">{weatherData.current.visibility} km</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Thermometer size={20} className="text-red-400" />
                  <span className="text-gray-300">Pressure</span>
                </div>
                <span className="font-semibold">{weatherData.current.pressure} hPa</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">{weatherData.current.uvIndex}</div>
              <div className="text-gray-300">UV Index</div>
              <div className="text-sm text-gray-400">Moderate</div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Temperature & Humidity Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <TrendingUp size={24} className="text-blue-400" />
              <span>24-Hour Trends</span>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weatherData.hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px' 
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="Temperature (°C)"
                />
                <Line 
                  type="monotone" 
                  dataKey="humidity" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  name="Humidity (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Precipitation Chart */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <CloudRain size={24} className="text-blue-400" />
              <span>Monthly Precipitation</span>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weatherData.precipitation}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px' 
                  }} 
                />
                <Bar 
                  dataKey="rainfall" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                  name="Rainfall (mm)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 7-Day Forecast */}
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Calendar size={24} className="text-blue-400" />
              <span>7-Day Forecast</span>
            </h2>
            <div className="space-y-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 text-center font-semibold text-gray-300">{day.day}</div>
                    <WeatherIcon condition={day.condition} size={24} />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-white">{day.high}°</div>
                      <div className="text-sm text-gray-400">{day.low}°</div>
                    </div>
                    <div className="w-16 bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                        style={{ width: `${(day.high / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Distribution */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Sun size={24} className="text-yellow-400" />
              <span>Weather Distribution</span>
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={weatherData.weatherDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {weatherData.weatherDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px' 
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {weatherData.weatherDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;