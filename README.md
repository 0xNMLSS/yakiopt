# YakiOpt

A strategy calculator for optimizing your all-you-can-eat yakiniku experience based on the Kimchi Constant (κ = 2.72).

## Live Demo

Deployed on Vercel: https://yakiopt.vercel.app

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Technology Stack

- React + Vite
- Tailwind CSS
- Recharts (for data visualization)
- Zustand (state management)
- React Router v6
- Vercel (deployment)

## Features

- Pure frontend application (zero backend, zero cost)
- Shareable strategy via URL parameters
- Responsive design
- Interactive charts showing fatigue and utility over time
- Personalized Kimchi Constant calculation
- Phase-based strategy recommendations

## Engine

The core strategy engine (`src/engine/`) consists of pure JavaScript functions:
- `constants.js`: Kimchi Constant calculations
- `fatigue.js`: Fatigue simulation
- `utility.js`: Enjoyment/utility simulation
- `grill.js`: Grill quality degradation model
- `scheduler.js`: Phase-based policy generator
- `index.js`: Main simulation runner

## Deployment

Deployed to Vercel with zero configuration needed:
1. Push to GitHub
2. Import project in Vercel
3. Set build command: `pnpm build`
4. Set output directory: `dist`
5. Deploy!

The Vercel free tier is more than sufficient for this static application.