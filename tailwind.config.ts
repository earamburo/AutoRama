import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': 'auto'
			}
		},
		extend: {
			colors: {
				brand: {
					DEFAULT: '#3b5bdb',
					hover: '#4c6ef5',
				},
				surface: {
					base: '#080b14',
					raised: '#0a0d1a',
				},
				ink: {
					muted: '#9ca3af',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					muted: 'hsl(var(--primary-muted))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				automotive: {
					dark: 'hsl(var(--automotive-dark))',
					darker: 'hsl(var(--automotive-darker))'
				},
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					muted: 'hsl(var(--gold-muted))',
					dark: 'hsl(var(--gold-dark))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontSize: {
				'label-xs': '7px',
				'label-sm': '8px',
				'label':    '9px',
				'label-md': '10px',
				'label-lg': '11px',
			},
			letterSpacing: {
				'snug':          '0.12em',
				'label':         '0.25em',
				'label-wide':    '0.3em',
				'label-wider':   '0.4em',
				'label-widest':  '0.5em',
			},
			fontFamily: {
				display: ['var(--font-display)'],
				condensed: ['var(--font-condensed)'],
				serif: ['var(--font-serif)'],
				body: ['var(--font-body)']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-dark': 'var(--gradient-dark)',
				'gradient-overlay': 'var(--gradient-overlay)'
			},
			boxShadow: {
				'gold': 'var(--shadow-gold)',
				'elegant': 'var(--shadow-elegant)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
