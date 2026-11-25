export const ASSETS = {
  heroBg: '/src/assets/images/hero_softland_bg_1795615852806.jpg',
  featureTeam: '/src/assets/images/feature_design_team_1795615852893.jpg',
  featureSync: '/src/assets/images/feature_mobile_sync_1795615853522.jpg',
  screenAnalytics: '/src/assets/images/app_screen_analytics_1795615854020.jpg',
  screenWorkspace: '/src/assets/images/app_screen_workspace_1795615854252.jpg',
};

export interface AboutCardItem {
  id: string;
  title: string;
  description: string;
  icon: 'buildings' | 'clipboard' | 'command' | 'graph';
  delay: number;
}

export const ABOUT_CARDS: AboutCardItem[] = [
  {
    id: 'eius-provident',
    title: 'Eius provident',
    description: 'Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem',
    icon: 'buildings',
    delay: 0.1,
  },
  {
    id: 'rerum-aperiam',
    title: 'Rerum aperiam',
    description: 'Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia',
    icon: 'clipboard',
    delay: 0.2,
  },
  {
    id: 'veniam-omnis',
    title: 'Veniam omnis',
    description: 'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti',
    icon: 'command',
    delay: 0.3,
  },
  {
    id: 'delares-sapiente',
    title: 'Delares sapiente',
    description: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda',
    icon: 'graph',
    delay: 0.4,
  },
];

export interface FeaturedHighlight {
  id: string;
  title: string;
  description: string;
  icon: 'users' | 'sun' | 'chart';
  delay: number;
}

export const FEATURED_HIGHLIGHTS: FeaturedHighlight[] = [
  {
    id: 'explore-team',
    title: 'Explore Your Team',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'users',
    delay: 0.1,
  },
  {
    id: 'digital-whiteboard',
    title: 'Digital Whiteboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'sun',
    delay: 0.2,
  },
  {
    id: 'design-development',
    title: 'Design To Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'chart',
    delay: 0.3,
  },
];

export interface StepCard {
  number: string;
  title: string;
  description: string;
  delay: number;
}

export const STEP_CARDS: StepCard[] = [
  {
    number: '01',
    title: 'Sign Up',
    description:
      'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat',
    delay: 0.1,
  },
  {
    number: '02',
    title: 'Create Profile',
    description:
      'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest',
    delay: 0.2,
  },
  {
    number: '03',
    title: 'Enjoy the app',
    description:
      'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis',
    delay: 0.3,
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'saul-goodman',
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    initials: 'SG',
    quote:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    rating: 5,
  },
  {
    id: 'sara-wilsson',
    name: 'Sara Wilsson',
    role: 'Designer',
    initials: 'SW',
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
    rating: 5,
  },
  {
    id: 'jena-karlis',
    name: 'Jena Karlis',
    role: 'Store Owner',
    initials: 'JK',
    quote:
      'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
    rating: 5,
  },
  {
    id: 'matt-brandon',
    name: 'Matt Brandon',
    role: 'Freelancer',
    initials: 'MB',
    quote:
      'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    rating: 5,
  },
  {
    id: 'john-larson',
    name: 'John Larson',
    role: 'Entrepreneur',
    initials: 'JL',
    quote:
      'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    rating: 5,
  },
];

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  featured: boolean;
  icon: 'box' | 'rocket' | 'plane';
  features: Array<{ text: string; included: boolean }>;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'free-plan',
    name: 'Free Plan',
    price: 0,
    featured: false,
    icon: 'box',
    features: [
      { text: 'Quam adipiscing vitae proin', included: true },
      { text: 'Nec feugiat nisl pretium', included: true },
      { text: 'Nulla at volutpat diam uteera', included: true },
      { text: 'Pharetra massa massa ultricies', included: false },
      { text: 'Massa ultricies mi quis hendrerit', included: false },
    ],
  },
  {
    id: 'business-plan',
    name: 'Business Plan',
    price: 29,
    featured: true,
    icon: 'rocket',
    features: [
      { text: 'Quam adipiscing vitae proin', included: true },
      { text: 'Nec feugiat nisl pretium', included: true },
      { text: 'Nulla at volutpat diam uteera', included: true },
      { text: 'Pharetra massa massa ultricies', included: true },
      { text: 'Massa ultricies mi quis hendrerit', included: true },
    ],
  },
  {
    id: 'developer-plan',
    name: 'Developer Plan',
    price: 49,
    featured: false,
    icon: 'plane',
    features: [
      { text: 'Quam adipiscing vitae proin', included: true },
      { text: 'Nec feugiat nisl pretium', included: true },
      { text: 'Nulla at volutpat diam uteera', included: true },
      { text: 'Pharetra massa massa ultricies', included: true },
      { text: 'Massa ultricies mi quis hendrerit', included: true },
    ],
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Non consectetur a erat nam at lectus urna duis?',
    answer:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    id: 'faq-2',
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
    answer:
      'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    id: 'faq-3',
    question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    answer:
      'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
  },
  {
    id: 'faq-4',
    question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
    answer:
      'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    id: 'faq-5',
    question: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
    answer:
      'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in',
  },
  {
    id: 'faq-6',
    question: 'Perspiciatis quod quo quos nulla quo illum ullam?',
    answer:
      'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.',
  },
];
