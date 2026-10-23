# RueCoaching

**Helping Young People Discover, Dream, and Do.**

RueCoaching is a youth development initiative focused on career exploration, mentorship, personal development, and capacity building.

The platform creates opportunities for young people to understand themselves, explore different career paths, connect with mentors, and develop the confidence and practical skills needed to make informed decisions about their future.

## Website Features

- Responsive design for desktop, tablet, and mobile
- Interactive sections with scroll animations
- Animated page preloader
- Career exploration and private coaching information
- Group workshops and mentorship opportunities
- Contact form integrated with Brevo for email delivery
- Social media links
- Smooth scrolling and back-to-top functionality

## Technology Stack

- React
- TypeScript
- Vite
- TanStack Start
- CSS
- Brevo Transactional Email API
- Lucide React Icons

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd rue-coaching-reimagined
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Environment Variables

Create a `.env` file in the project root and configure:

```env
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_verified_sender_email
RUE_CONTACT_EMAIL=your_receiving_email
```

These variables are used by the server-side contact form to send enquiries through Brevo.

Never commit API keys or environment files containing secrets to GitHub.

## Production Build

Build the project using:

```bash
npm run build
```

The application requires hosting that supports TanStack Start server functions for the contact form to operate correctly.

## Contact

For information about career exploration, mentorship, coaching, and workshops, visit [RueCoaching](https://ruecoaching.com/).

## Website Development

Developed by [LetyTech Consultancy](https://letytechconsultancy.co.ke/).

© 2026 RueCoaching. All rights reserved.