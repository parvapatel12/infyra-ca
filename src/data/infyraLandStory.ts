export interface StoryStop {
  id: string;
  postNumber: number;
  title: string;
  facilityName: string;
  vibe: string;
  story: string;
  iconName: string;
  badgeColor: string;
}

export const INFYRA_STORY_STOPS: StoryStop[] = [
  {
    id: 'design-dome',
    postNumber: 1,
    title: 'First Stop: Design & Imagination',
    facilityName: 'The Dream Design Dome 🎨',
    vibe: 'Creative, artistic, and full of oversized sketchpads and felt buttons.',
    story: 'Our little mascot hops into a tiny pastel toy car to start the road trip deep in the cozy Yarn Mountains. Every cute shape, soft texture, and ergonomic grip is sketched here with love and imagination.',
    iconName: 'Palette',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
  },
  {
    id: 'materials-meadow',
    postNumber: 2,
    title: 'Second Stop: Premium Material Sourcing',
    facilityName: 'The Pure Materials Meadow 🌿',
    vibe: 'Fresh, clean, organic, and ultra-safe.',
    story: 'Switching gears to a two-wheel bicycle through felt grass and fabric flowers! Before any design becomes a teether, we source only 100% food-grade silicone—BPA-free, phthalate-free, and non-toxic.',
    iconName: 'Leaf',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  {
    id: 'manufactory',
    postNumber: 3,
    title: 'Third Stop: Engineering & Molding',
    facilityName: 'The Make-Believe Manufactory ⚙️',
    vibe: 'Smart, cool, and playful with turning wooden gears and clear windows.',
    story: 'Cruising down Bubblegum River on a wooden tugboat! Here, raw materials are precision-molded into our signature Fresh Green Rattle, Ocean Blue Teether, Crocodile Pop-It, and Crab Teether with flawless accuracy.',
    iconName: 'Cog',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    id: 'safety-castle',
    postNumber: 4,
    title: 'Fourth Stop: Safety Testing & Compliance',
    facilityName: 'The Care & Compliance Castle 🏰 🍁',
    vibe: 'Extremely secure, trustworthy, and distinctly Canadian.',
    story: 'Floating high into fluffy cloud cliffs in a patchwork hot air balloon! Every single batch undergoes rigorous lab testing and compliance checks to proudly exceed strict Canadian safety standards.',
    iconName: 'ShieldCheck',
    badgeColor: 'bg-red-100 text-red-800 border-red-200',
  },
  {
    id: 'perfection-pavilion',
    postNumber: 5,
    title: 'Fifth Stop: Hand Quality Inspection',
    facilityName: 'The Quality-Care Quarters 🔍',
    vibe: 'Meticulous, detailed, and reassuring for parents.',
    story: 'Zipping along on a pastel scooter to a building shaped like a giant wooden magnifying glass. Every single teether is hand-inspected for smooth edges, perfect texture molding, and zero defects.',
    iconName: 'Search',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    id: 'fulfillment-station',
    postNumber: 6,
    title: 'Sixth Stop: Logistics & Packing',
    facilityName: 'The Parcel & Promise Station 📦',
    vibe: 'Busy, cheerful, and organized like a giant gift box.',
    story: 'Riding a colorful delivery train winding through fabric trees! Packed like a precious gift, every order is prepared with love for fast fulfillment to Canadian homes via Amazon Prime.',
    iconName: 'Package',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  },
  {
    id: 'parent-support',
    postNumber: 7,
    title: 'Seventh Stop: Parent Support & Community',
    facilityName: 'The Care & Comfort Cottage ☎️',
    vibe: 'Warm, welcoming, helpful, and community-first.',
    story: 'Stopping at a cozy cottage shaped like a vintage rotary telephone. Here, our customer care team answers parenting questions, shares teething tips, and listens to feedback with open arms.',
    iconName: 'HeartHandshake',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
  },
  {
    id: 'grand-arrival',
    postNumber: 8,
    title: 'Final Stop: Welcome Home',
    facilityName: 'Infyra Land Arrival Gates 🎪 ☀️',
    vibe: 'Ultimate celebration of joy, happiness, and baby comfort!',
    story: 'Arriving at the grand wooden archway of Infyra Land! All 4 signature teethers gather on swings and slides to welcome our little traveler home—ready to bring joy and soothing relief to babies everywhere.',
    iconName: 'Sparkles',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
  }
];
