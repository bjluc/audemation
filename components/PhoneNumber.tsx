'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

// Obfuscated phone number parts
const PHONE_PARTS = {
  country: '44',
  area: '7763',
  number: '572224'
};

// Function to obfuscate a string
const obfuscate = (str: string) => {
  return str.split('').reverse().join('');
};

// Function to deobfuscate a string
const deobfuscate = (str: string) => {
  return str.split('').reverse().join('');
};

export default function PhoneNumber() {
  const [isVisible, setIsVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Decode the phone number only when component mounts
    const decodedNumber = `+${PHONE_PARTS.country} (0)${PHONE_PARTS.area} ${PHONE_PARTS.number}`;
    setPhoneNumber(decodedNumber);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Phone className="h-4 w-4" />
      {isVisible ? (
        <a 
          href={`tel:+${PHONE_PARTS.country}${PHONE_PARTS.area}${PHONE_PARTS.number}`}
          className="text-foreground/80 hover:text-primary transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `tel:+${PHONE_PARTS.country}${PHONE_PARTS.area}${PHONE_PARTS.number}`;
          }}
        >
          {phoneNumber}
        </a>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="text-foreground/80 hover:text-primary transition-colors"
          aria-label="Click to reveal phone number"
        >
          Click to reveal phone number
        </button>
      )}
    </div>
  );
} 