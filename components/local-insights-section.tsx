import { Map, Utensils, Landmark, Calendar, Cloud, Sun, Umbrella, Navigation } from "lucide-react"

export default function LocalInsightsSection() {
  return (
    <section id="local-insights" className="py-16 relative" aria-labelledby="local-insights-heading">
      <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <span className="text-sm font-medium section-title">Local Area Intelligence</span>
            </div>
          </div>
          <h2 id="local-insights-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4">
            Your AI-Powered Local Guide
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Enhance guest experience with real-time local insights and weather updates. Help your guests make the most of their stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Local Knowledge Section */}
          <div className="glass-card p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Map className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Local Area Knowledge</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Utensils className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Restaurants & Dining</h4>
                  <p className="text-sm text-foreground/80">Local restaurant recommendations, cuisine types, and booking assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Landmark className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Attractions & Culture</h4>
                  <p className="text-sm text-foreground/80">Museums, galleries, historical sites, and local landmarks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Events & Festivals</h4>
                  <p className="text-sm text-foreground/80">Current and upcoming local events, festivals, and activities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Navigation className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Transportation</h4>
                  <p className="text-sm text-foreground/80">Public transport info, parking spots, and navigation tips</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Section */}
          <div className="glass-card p-6 md:p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Weather Intelligence</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Sun className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Updates</h4>
                  <p className="text-sm text-foreground/80">Current conditions and hourly forecasts for precise planning</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Umbrella className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Activity Suggestions</h4>
                  <p className="text-sm text-foreground/80">Weather-based recommendations for indoor/outdoor activities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Extended Forecast</h4>
                  <p className="text-sm text-foreground/80">7-day forecast to help plan the entire stay</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Map className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Local Climate Info</h4>
                  <p className="text-sm text-foreground/80">Seasonal trends and packing recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Interaction */}
        <div className="glass-card p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-4">Sample AI Responses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <p className="italic text-sm">Guest: "What's good for dinner around here?"</p>
              <p className="mt-2 text-sm">🤖 "There are several highly-rated restaurants within walking distance. The Italian restaurant 'La Cucina' (4.8★) is just 5 minutes away and known for their homemade pasta. For traditional British fare, 'The Crown' pub (4.6★) is popular with locals. Both are open now and I can help with reservations if you'd like."</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <p className="italic text-sm">Guest: "Should we visit the castle tomorrow?"</p>
              <p className="mt-2 text-sm">🤖 "Tomorrow's forecast shows rain in the morning but clearing by 2pm. The castle has both indoor and outdoor areas, so I'd recommend planning your visit for the afternoon. They also have a special exhibition running this week. Would you like the ticket information?"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 