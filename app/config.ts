// Email configuration
export const emailConfig = {
  contactEmail: process.env.CONTACT_EMAIL || "bernard@audemation.com",
  fromEmail: process.env.FROM_EMAIL || "noreply@audemation.com",
}

// Site configuration
export const siteConfig = {
  name: "Audemation",
  url: "https://audemation.com",
  address: {
    line1: "Woolwich House",
    line2: "147 High Street",
    city: "London",
    postcode: "SE18 6BY",
    country: "United Kingdom",
  },
  phone: "+44 (0) 7123-4567",
}

