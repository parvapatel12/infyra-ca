import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'fresh-green-rattle',
    name: '2-in-1 Rattle Teether',
    subtitle: 'Smart Sensory Chew Toy with Soft Sound & Easy Grip',
    colorName: 'Fresh Green',
    colorHex: '#4A7C59',
    bgGradient: 'from-emerald-50 to-teal-50 border-emerald-200',
    badge: 'Bestseller 🌟',
    amazonUrl: 'https://www.amazon.ca/dp/B0GT3BSXPW?th=1',
    description: 'Engineered with 5 unique textured nubs to soothe tender gums and an easy-grip handle for motor skill development. Delivers soft, soothing rattle sounds without overstimulating little ears.',
    dimensions: {
      height: '117mm',
      width: '102mm',
      weight: '65.7g',
      handleOpening: '60mm',
      thickness: '12mm',
    },
    keyFeatures: [
      '5 Unique Sensory Textures (Rabbit face, bear face, 3D dots, spiral swirl, ribbed ridges)',
      'Interactive Pop-It Central Dome for fine motor skill development',
      'Gentle, Quiet Rattle Sound (No harsh electronics or batteries)',
      '100% Food-Grade Silicone (BPA-Free, Phthalate-Free, Lead-Free)',
      'Ergonomic Open-Loop Base Handle designed specifically for tiny hands'
    ],
    sensoryBreakdown: [
      {
        title: 'Top-Left Ray',
        description: 'Embossed Rabbit Face with long ear contours to massage front gums.',
      },
      {
        title: 'Top-Center Ray',
        description: 'Covered in raised 3D dots matrix for deep tactile stimulation.',
      },
      {
        title: 'Top-Right Ray',
        description: 'Embossed Bear Face with round ears and snout detail.',
      },
      {
        title: 'Bottom-Right Ray',
        description: 'Embossed Spiral Swirl texture for soothing friction relief.',
      },
      {
        title: 'Bottom-Left Ray',
        description: 'Horizontal Ribbed Ridges to reach tender molars.',
      },
      {
        title: 'Center Dome',
        description: 'Smooth central pop-it bulb for satisfying tactile engagement.',
      }
    ],
    specifications: {
      material: '100% Premium Food-Grade Silicone',
      certifications: 'Lab-Tested & Compliant with Strict Canadian Safety Standards',
      ageRange: '0 – 12 Months',
      careInstructions: 'Boil safe, dishwasher safe (top rack), wash with warm soapy water',
    },
    rating: 4.9,
    reviewCount: 48,
    svgType: 'rattle-green',
  },
  {
    id: 'ocean-blue-rattle',
    name: '2-in-1 Rattle Teether',
    subtitle: 'Soothing Slate Blue Edition for Calm Sensory Play',
    colorName: 'Ocean Blue',
    colorHex: '#5B7C99',
    bgGradient: 'from-sky-50 to-blue-50 border-sky-200',
    badge: 'Popular Choice ☁️',
    amazonUrl: 'https://www.amazon.ca/dp/B0GT7VPW43?th=1', // Product variant on same listing
    description: 'Brings a soothing, calm sky-blue aesthetic to your baby’s teething journey. Combines a gentle rattle sound, central pop-it dome, and 5 distinct textured rays to soothe gums from every angle.',
    dimensions: {
      height: '117mm',
      width: '102mm',
      handleOpening: '60mm',
      thickness: '12mm',
      weight: '65.7g',
    },
    keyFeatures: [
      'Soft Slate Blue Matte Silicone finish',
      'Dual Rabbit & Bear embossed animal face rays',
      'Built-in soft click rattle sound',
      'Ultra-lightweight & ergonomic solo-grip base',
      'Lab-tested for 0-12 months infants'
    ],
    sensoryBreakdown: [
      {
        title: 'Top-Left Ray',
        description: 'Embossed Rabbit Face for gentle front gum relief.',
      },
      {
        title: 'Top-Center Ray',
        description: 'Raised 3D dot matrix for tactile exploration.',
      },
      {
        title: 'Top-Right Ray',
        description: 'Embossed Bear Face with rounded ears.',
      },
      {
        title: 'Bottom-Right Ray',
        description: 'Concentric Spiral Swirl texture.',
      },
      {
        title: 'Bottom-Left Ray',
        description: 'Horizontal Ribbed Ridges.',
      },
      {
        title: 'Center Dome',
        description: 'Soft silicone pop-it bulb for fidget play.',
      }
    ],
    specifications: {
      material: '100% Premium Food-Grade Silicone',
      certifications: 'Lab-Tested & Compliant with Strict Canadian Safety Standards',
      ageRange: '0 – 12 Months',
      careInstructions: 'Boil safe, sterilizer friendly, easy to wipe clean on the go',
    },
    rating: 4.9,
    reviewCount: 36,
    svgType: 'rattle-blue',
  },
  {
    id: 'grey-crocodile-teether',
    name: 'Crocodile Pop-It Teether',
    subtitle: 'Multi-Textured Sensory Gator with Tail Handle',
    colorName: 'Matte Stone Grey',
    colorHex: '#64748B',
    bgGradient: 'from-slate-50 to-gray-100 border-slate-200',
    badge: 'Baby\'s Favorite 🐊',
    amazonUrl: 'https://www.amazon.ca/dp/B0GT8KX85H',
    description: 'Designed as a friendly, non-intimidating crocodile with a toothy smile, spine ridges, and 5 distinct tactile pop-it buttons (starburst, dots, fine dots, wavy lines, and spiral) to keep curious hands busy.',
    dimensions: {
      height: '91mm',
      width: '95mm',
      thickness: '12mm',
      weight: '48.5g',
    },
    keyFeatures: [
      '5 Tactile Pop-It Buttons (Starburst, coarse dots, fine dots, wavy lines, spiral)',
      'Integrated Curved Tail Handle for easy two-handed holding',
      'Textured Spine & Tooth Line for targeted gum massage',
      'Durable, waterproof & 100% food-grade silicone',
      'Perfect for mealtime high-chair distraction & stroller walks'
    ],
    sensoryBreakdown: [
      {
        title: 'Top-Left Button',
        description: 'Radial Starburst pattern for firm gum press.',
      },
      {
        title: 'Top-Right Button',
        description: 'Covered in raised 3D dots/nubs.',
      },
      {
        title: 'Bottom-Left Button',
        description: 'Smaller, dense massaging dot cluster.',
      },
      {
        title: 'Bottom-Center Button',
        description: 'Horizontal wavy ripple lines.',
      },
      {
        title: 'Bottom-Right Button',
        description: 'Concentric spiral swirl pattern.',
      },
      {
        title: 'Spine Ridges',
        description: 'Raised triangular scale ridges along tail handle.',
      }
    ],
    specifications: {
      material: '100% Premium Food-Grade Silicone',
      certifications: 'Lab-Tested & Compliant with Strict Canadian Safety Standards',
      ageRange: '0 – 12 Months',
      careInstructions: 'Rinse under warm water, dishwasher safe, boil safe',
    },
    rating: 4.8,
    reviewCount: 42,
    svgType: 'crocodile-grey',
  },
  {
    id: 'cream-yellow-crab-teether',
    name: 'Silicone Crab Teether',
    subtitle: 'Multi-Colored Ocean Friend with Star Claws & Wave Legs',
    colorName: 'Cream Yellow',
    colorHex: '#D97706',
    bgGradient: 'from-amber-50 to-orange-50 border-amber-200',
    badge: 'Must-Have 🦀',
    amazonUrl: 'https://www.amazon.ca/dp/B0GSPTTHSH',
    description: 'A cheerful ocean companion featuring a cream central body with a friendly smiley face, mustard yellow claws with embossed stars and dots, and multi-textured legs in coral, tan, and yellow.',
    dimensions: {
      height: '82mm',
      width: '110mm',
      thickness: '10mm',
      weight: '50.1g',
    },
    keyFeatures: [
      'Mustard Yellow Claws with embossed 3D dots and stars',
      'Central Handle Ring for easy two-handed grip during tummy time',
      '6 Multi-Textured Legs (Spiral swirls, massaging dots, wavy ripple lines)',
      '100% BPA-Free, Non-Toxic & Phthalate-Free',
      'Compact & travel-friendly diaper bag essential'
    ],
    sensoryBreakdown: [
      {
        title: 'Left Claw',
        description: '4 raised massaging dots in warm mustard yellow.',
      },
      {
        title: 'Right Claw',
        description: '3 embossed star shapes for varied chewing texture.',
      },
      {
        title: 'Top Side Legs',
        description: 'Vibrant coral-orange with spiral swirl ridges.',
      },
      {
        title: 'Middle Side Legs',
        description: 'Light tan with raised massaging dots.',
      },
      {
        title: 'Bottom Feet',
        description: 'Yellow feet with wavy ripple lines.',
      },
      {
        title: 'Inner Ring',
        description: 'Smooth ergonomic grip for little hands.',
      }
    ],
    specifications: {
      material: '100% Premium Food-Grade Silicone',
      certifications: 'Lab-Tested & Compliant with Strict Canadian Safety Standards',
      ageRange: '0 – 12 Months',
      careInstructions: 'Top-rack dishwasher safe, warm soapy water wash',
    },
    rating: 4.9,
    reviewCount: 39,
    svgType: 'crab-yellow',
  }
];
