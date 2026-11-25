export type DivisionId = 'all' | 'general-goods' | 'specialized-procurement' | 'services';

export interface SupplyCategory {
  id: string;
  title: string;
  description: string;
}

export interface SupplyDivision {
  id: Exclude<DivisionId, 'all'>;
  code: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  categories: SupplyCategory[];
}

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

export interface ClienteleSector {
  index: string;
  title: string;
  scope: string;
}

export interface ExcellencePillar {
  number: string;
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  businessName: 'M/S. ZAHRA ENTERPRISE',
  shortName: 'Zahra Enterprise',
  tagline: 'Your Trusted Partner for Comprehensive Supply Solutions in Bangladesh',
  businessType: 'Proprietorship / Trading House',
  location: 'Dhaka and Bogura, Bangladesh',
  contactPerson: 'Sanower Hossain Talukder',
  contactRole: 'Business Development Manager',
  phone: '+880 1829 657 608',
  phoneHref: 'tel:+8801829657608',
  email: 'bdm@zahra-bd.com',
  website: 'www.zahra-bd.com',
  websiteHref: 'https://www.zahra-bd.com',
  overviewParagraphs: [
    'M/S. ZAHRA ENTERPRISE is a premier and dedicated supplier of a diverse range of goods and services based in Bangladesh. With a commitment to excellence, integrity, and reliability, we have established ourselves as a go-to procurement partner for businesses, government organizations, and non-governmental organizations (NGOs) across the country.',
    'We specialize in bridging the gap between quality products and the clients who need them, ensuring timely delivery and competitive pricing without compromising on standards.',
  ],
  vision:
    'To be the most reliable and preferred supply chain partner in Bangladesh, recognized for our versatility and unwavering commitment to quality.',
  mission:
    'To provide our clients with a seamless procurement experience by sourcing high-quality goods and delivering professional services that exceed expectations, thereby contributing to the operational efficiency of our partners.',
  conclusion:
    'M/S. ZAHRA ENTERPRISE is more than just a supplier; we are a strategic partner in your success. Whether you require a one-time bulk purchase or a long-term supply contract, we possess the agility and resources to fulfill your requirements with precision and care.',
};

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_logistics_hub_1795452050079.jpg',
  alt: 'High-bay commercial supply chain and procurement distribution warehouse operated for nationwide delivery in Bangladesh',
};

export const OPERATIONS_IMAGE = {
  src: '/src/assets/images/operations_sourcing_center_1795452052284.jpg',
  alt: 'Procurement specialists reviewing vendor quality compliance specifications inside a Dhaka corporate conference room',
};

export const OPERATIONAL_METRICS = [
  {
    label: 'Supplier Mandate',
    value: 'All Goods & Services',
    detail: 'Dedicated supplier in Bangladesh',
  },
  {
    label: 'Regional Hubs',
    value: 'Dhaka & Bogura',
    detail: 'Dual-corridor dispatch coverage',
  },
  {
    label: 'Service Reach',
    value: '64 Districts',
    detail: 'Nationwide Bangladesh logistics',
  },
  {
    label: 'Trade Compliance',
    value: '100% Vetted',
    detail: 'PRB tax & trade regulation aligned',
  },
];

export const SUPPLY_DIVISIONS: SupplyDivision[] = [
  {
    id: 'general-goods',
    code: 'Division 01',
    title: 'General Goods Supply',
    summary:
      'Complete institutional and corporate supply covering daily workplace consumables, IT infrastructure, commercial furnishings, industrial electrical hardware, and facility hygiene.',
    image: '/src/assets/images/sector_general_goods_1795452050297.jpg',
    imageAlt:
      'Modern corporate workspace equipped with enterprise IT systems, ergonomic furniture, and organized office supplies',
    categories: [
      {
        id: 'office-stationery',
        title: 'Office & Stationery',
        description:
          'Complete solutions for corporate offices, educational institutions, and government bodies.',
      },
      {
        id: 'it-electronics',
        title: 'IT & Electronics',
        description:
          'Supply of computers, printers, networking equipment, and accessories.',
      },
      {
        id: 'furniture-fixtures',
        title: 'Furniture & Fixtures',
        description:
          'Office furniture, industrial shelving, and custom fixtures.',
      },
      {
        id: 'electrical-hardware',
        title: 'Electrical & Hardware',
        description:
          'Industrial electrical components, tools, and safety equipment.',
      },
      {
        id: 'janitorial-hygiene',
        title: 'Janitorial & Hygiene',
        description:
          'Cleaning supplies, sanitizers, and washroom essentials for large facilities.',
      },
    ],
  },
  {
    id: 'specialized-procurement',
    code: 'Division 02',
    title: 'Specialized Procurement',
    summary:
      'Targeted sourcing for industrial plants, production facilities, workplace safety compliance, field operations, and agricultural programs with strict material specification checks.',
    image: '/src/assets/images/sector_specialized_procurement_1795452051857.jpg',
    imageAlt:
      'Industrial depot storing raw material rolls, hardware components, and standardized corporate safety uniforms and helmets',
    categories: [
      {
        id: 'industrial-raw-materials',
        title: 'Industrial Raw Materials',
        description:
          'Sourcing of materials for manufacturing and packaging.',
      },
      {
        id: 'safety-materials',
        title: 'Safety Materials',
        description:
          'Safety shoes, helmets, aprons, protective goggles, gloves, high-visibility vests, and industrial PPE.',
      },
      {
        id: 'agricultural-inputs',
        title: 'Agricultural Inputs',
        description:
          'Seeds, fertilizers, and farming tools for regional agricultural initiatives.',
      },
      {
        id: 'apparel-uniforms',
        title: 'Apparel & Uniforms',
        description:
          'Supply of corporate uniforms, workwear, and institutional apparel.',
      },
    ],
  },
  {
    id: 'services',
    code: 'Division 03',
    title: 'Services & Logistics',
    summary:
      'End-to-end operational execution linking procurement to on-site delivery, technical equipment maintenance, and corporate event logistics across Bangladesh.',
    image: '/src/assets/images/sector_logistics_services_1795452051882.jpg',
    imageAlt:
      'Commercial cargo trucks loading palletized supplies at a regional distribution bay for nationwide delivery',
    categories: [
      {
        id: 'logistics-distribution',
        title: 'Logistics & Distribution',
        description:
          'Efficient transportation and delivery of goods across Bangladesh.',
      },
      {
        id: 'maintenance-support',
        title: 'Maintenance & Support',
        description:
          'Sourcing of technical support and maintenance services for office equipment.',
      },
      {
        id: 'event-management-support',
        title: 'Event Management Support',
        description:
          'Supply of materials and logistical support for corporate events and seminars.',
      },
    ],
  },
];

export const WHY_CHOOSE_US: AdvantageItem[] = [
  {
    number: '01',
    title: 'One-Stop Solution',
    description:
      'We eliminate the need to deal with multiple vendors. From a box of paperclips to industrial machinery, we handle it all.',
  },
  {
    number: '02',
    title: 'Quality Assurance',
    description:
      'We rigorously vet our suppliers to ensure all goods meet the required standards and specifications.',
  },
  {
    number: '03',
    title: 'Competitive Pricing',
    description:
      'Our established network allows us to offer the best market rates without compromising product integrity.',
  },
  {
    number: '04',
    title: 'Timely Delivery',
    description:
      'We understand that time is money. Our logistics team ensures prompt delivery schedules across regions.',
  },
  {
    number: '05',
    title: 'Customized Solutions',
    description:
      'We tailor our supply lists to meet the specific, unique needs of each client and tender specification.',
  },
];

export const TARGET_CLIENTELE: ClienteleSector[] = [
  {
    index: '01',
    title: 'Corporate Houses & Multinational Companies (MNCs)',
    scope: 'Annual rate contracts, office infrastructure, IT systems, and corporate event support.',
  },
  {
    index: '02',
    title: 'Government Agencies & Autonomous Bodies',
    scope: 'Tender-compliant institutional procurement, stationery, furniture, and facility supplies.',
  },
  {
    index: '03',
    title: 'Non-Governmental Organizations (NGOs) & Development Agencies',
    scope: 'Rapid field-level procurement, agricultural inputs, hygiene kits, and nationwide distribution.',
  },
  {
    index: '04',
    title: 'Educational Institutions',
    scope: 'Academic furnishings, computer labs, stationery bulk supply, and campus maintenance.',
  },
  {
    index: '05',
    title: 'Manufacturing & Industrial Plants',
    scope: 'Raw materials, packaging inputs, electrical hardware, safety gear, and industrial shelving.',
  },
];

export const OPERATIONAL_EXCELLENCE: ExcellencePillar[] = [
  {
    number: '01',
    title: 'Sourcing Network',
    description:
      'Strong relationships with manufacturers, authorized distributors, and importers across Bangladesh enable direct procurement and stable inventory availability.',
  },
  {
    number: '02',
    title: 'Procurement Process',
    description:
      'Transparent, ethical, and efficient procurement workflows built for auditable institutional purchasing and multi-tier vendor verification.',
  },
  {
    number: '03',
    title: 'Compliance',
    description:
      'Fully compliant with all trade regulations and tax laws of the People’s Republic of Bangladesh, supporting seamless VAT and statutory documentation.',
  },
];
