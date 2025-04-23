/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    'w-6',
    'h-6',
    'mr-3',
    'text-gray-600',
    'text-white',
    'text-green-800',
    'text-yellow-800',
    'text-purple-800',
    'text-gray-800',
    'text-blue-800',
    'bg-green-100',
    'bg-yellow-100',
    'bg-purple-100',
    'bg-gray-100',
    'bg-blue-100',
    'bg-blue-500',
    'rounded-lg',
    'rounded-full'
  ]
}
