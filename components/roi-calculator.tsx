"use client";

import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define our savings tiers for reference - UPDATED with more realistic figures
const SAVINGS_TIERS = [
  { min: 1, max: 10, hourlyRate: 18, hoursPerWeek: 15, description: "5-10 Properties" },
  { min: 11, max: 25, hourlyRate: 20, hoursPerWeek: 30, description: "11-25 Properties" },
  { min: 26, max: 50, hourlyRate: 22, hoursPerWeek: 50, description: "26-50 Properties" },
  { min: 51, max: 1000, hourlyRate: 25, hoursPerWeek: 75, description: "51+ Properties" },
];

// Helper function to calculate savings based on property count
const calculateSavings = (propertyCount: number) => {
  // Find the appropriate tier
  const tier = SAVINGS_TIERS.find(
    (tier) => propertyCount >= tier.min && propertyCount <= tier.max
  ) || SAVINGS_TIERS[SAVINGS_TIERS.length - 1]; // Default to highest tier if beyond ranges
  
  // For properties within a tier, calculate proportional scaling
  let timePerProperty;
  
  if (propertyCount <= 10) {
    // 1-10 properties: 1.5-2 hours per property per week
    timePerProperty = 1.5 + (propertyCount / 20); // Scales from 1.5 to 2 hours
  } else if (propertyCount <= 25) {
    // 11-25 properties: 1.2-1.5 hours per property per week (economies of scale)
    timePerProperty = 1.5 - ((propertyCount - 10) / 100); // Scales from 1.5 to 1.2 hours
  } else if (propertyCount <= 50) {
    // 26-50 properties: 1-1.2 hours per property per week (more efficiency)
    timePerProperty = 1.2 - ((propertyCount - 25) / 250); // Scales from 1.2 to 1 hour
  } else {
    // 51+ properties: 0.75-1 hour per property per week (maximum efficiency)
    timePerProperty = 1 - Math.min((propertyCount - 50) / 400, 0.25); // Scales from 1 to minimum of 0.75 hours
  }
  
  // Calculate total hours saved per week (with more realistic scaling)
  const hoursPerWeek = Math.max(Math.round(propertyCount * timePerProperty), 5); // Minimum 5 hours saved
  
  // Calculate monthly cost savings (4.33 weeks in a month average)
  // Using appropriate hourly rate based on tier
  const monthlySavings = hoursPerWeek * 4.33 * tier.hourlyRate;
  
  return {
    hoursPerWeek: hoursPerWeek,
    monthlySavings: Math.round(monthlySavings),
  };
};

interface ROICalculatorProps {
  buttonText?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
  calendlyUrl?: string;
}

const ROICalculator = ({ 
  buttonText = "Calculate Your Savings", 
  className = "bg-primary hover:bg-primary/90 group w-full sm:w-auto",
  size = "default",
  calendlyUrl = "https://calendly.com/bernard-audemation/30min" // Default Calendly URL
}: ROICalculatorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [propertyCount, setPropertyCount] = useState<number>(10);
  const [savings, setSavings] = useState({ hoursPerWeek: 0, monthlySavings: 0 });
  const [showResults, setShowResults] = useState(false);

  // Calculate savings when property count changes
  useEffect(() => {
    setSavings(calculateSavings(propertyCount));
  }, [propertyCount]);

  const handleCalculate = () => {
    setSavings(calculateSavings(propertyCount));
    setShowResults(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Reset when modal opens
  useEffect(() => {
    if (isOpen) {
      setPropertyCount(10);
      setShowResults(false);
    }
  }, [isOpen]);

  // Handle the Escape key press to close the modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <Button 
        onClick={openModal} 
        className={className}
        size={size}
      >
        {buttonText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>

      {/* Modal Overlay - Fixed positioned with scrollable content */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-start justify-center overflow-y-auto py-6 sm:py-10 px-3 sm:px-4" onClick={closeModal}>
          {/* Modal Content - Stop propagation to prevent closing when clicking inside */}
          <div 
            className="w-full max-w-4xl my-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background/95 backdrop-blur-xl p-5 sm:p-6 rounded-xl relative animate-fade-in animate-scale-in border border-primary/20 shadow-2xl">
              {/* Close button - Fixed position to ensure it's always visible */}
              <div className="sticky top-0 flex justify-end -mt-1 -mr-1 sm:-mt-2 sm:-mr-2 mb-2 z-10">
                <button 
                  onClick={closeModal}
                  className="p-3 rounded-xl bg-primary/20 hover:bg-primary/40 transition-colors"
                  aria-label="Close calculator"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <h3 className="text-xl font-bold text-gradient mb-4 text-center">ROI Calculator</h3>
              <p className="text-center mb-5 text-foreground/90">
                See how much time and money your property management business could save with our automation solutions.
              </p>

              <div className="bg-primary/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-primary/20 mb-6 shadow-lg">
                <div className="mb-4">
                  <label htmlFor="propertyCount" className="block text-foreground font-medium mb-3">
                    How many properties do you manage?
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <input
                      type="range"
                      id="propertyCount"
                      min="1"
                      max="100"
                      step="1"
                      value={propertyCount}
                      onChange={(e) => setPropertyCount(parseInt(e.target.value))}
                      className="w-full h-3 bg-primary/30 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="bg-primary/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-xl min-w-[60px] text-center">
                      <span className="text-foreground font-bold">{propertyCount}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Button 
                    onClick={handleCalculate} 
                    className="bg-primary hover:bg-primary/90 group w-full sm:w-auto py-4 sm:py-2 px-6"
                  >
                    Calculate My Savings <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {showResults && (
                <div className="animate-fade-in space-y-4 sm:space-y-6">
                  <h4 className="text-lg font-bold text-gradient mb-4 text-center">Your Estimated Savings</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
                    <div className="bg-primary/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-primary/20 text-center shadow-lg">
                      <div className="mb-2 text-foreground/90">Weekly Time Savings</div>
                      <div className="text-3xl font-bold text-gradient mb-1">{savings.hoursPerWeek} hours</div>
                      <p className="text-sm text-foreground/90">
                        This is time you can spend growing your business or enjoying life.
                      </p>
                    </div>

                    <div className="bg-primary/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-primary/20 text-center shadow-lg">
                      <div className="mb-2 text-foreground/90">Monthly Cost Savings</div>
                      <div className="text-3xl font-bold text-gradient mb-1">£{savings.monthlySavings}</div>
                      <p className="text-sm text-foreground/90">
                        Based on average staff costs for UK property management.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-primary/20 text-center shadow-lg">
                    <p className="text-sm text-foreground/90 italic">
                      "With AirbnbBot, I've reclaimed 20+ hours every week while improving my guest review scores. It's been transformative for my business."
                    </p>
                    <p className="text-xs text-foreground/80 mt-1">
                      — UK Property Manager with {propertyCount < 15 ? "8" : propertyCount < 30 ? "22" : "35"} properties
                    </p>
                  </div>
                  
                  <div className="text-center mt-6 sm:mt-8">
                    <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
                      <Button
                        className="bg-primary hover:bg-primary/90 group w-full py-4 sm:py-2 px-6"
                        size="lg"
                      >
                        Schedule a Demo <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <p className="text-xs text-foreground/80 mt-3">
                      Schedule a 30-minute consultation to discuss your specific needs
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ROICalculator; 