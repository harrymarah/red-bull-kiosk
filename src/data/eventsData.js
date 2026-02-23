export const events = [
  {
    slug: 'gym-clash',
    name: 'Red Bull Gym Clash',
    tag: 'Strength',
    cover: '/assets/images/events/gym-clash/SI202510050040.jpg',
    images: [
      '/assets/images/events/gym-clash/SI202510050040.jpg',
      '/assets/images/events/gym-clash/SI202510050055.jpg',
      '/assets/images/events/gym-clash/SI202510050065.jpg',
      '/assets/images/events/gym-clash/SI202510050066.jpg',
      '/assets/images/events/gym-clash/SI202510050067.jpg',
      '/assets/images/events/gym-clash/SI202510050075.jpg',
      '/assets/images/events/gym-clash/SI202510130067.jpg',
      '/assets/images/events/gym-clash/SI202510130077.jpg',
      '/assets/images/events/gym-clash/SI202510130077 (1).jpg',
      '/assets/images/events/gym-clash/Picture14.png',
      '/assets/images/events/gym-clash/Picture15.png',
    ],
  },
  {
    slug: 'hyrox',
    name: 'HYROX',
    tag: 'Racing',
    cover: '/assets/images/events/hyrox/SI202602080213.jpg',
    images: [
      '/assets/images/events/hyrox/SI202602080213.jpg',
      '/assets/images/events/hyrox/SI202602080213 (1).jpg',
      '/assets/images/events/hyrox/SI202602080350.jpg',
      '/assets/images/events/hyrox/SI202506130190.jpg',
      '/assets/images/events/hyrox/SI202506150319.jpg',
      '/assets/images/events/hyrox/SI202507210219.jpg',
    ],
  },
  {
    slug: 'jake-pull-up',
    name: 'Jake Pull Up Challenge',
    tag: 'Challenge',
    cover: '/assets/images/events/jake-pull-up/Picture13.png',
    images: [
      '/assets/images/events/jake-pull-up/Picture13.png',
      '/assets/images/events/jake-pull-up/SI202406100408.jpg',
      '/assets/images/events/jake-pull-up/SI202406100412.jpg',
      '/assets/images/events/jake-pull-up/SI202504150277.jpg',
      '/assets/images/events/jake-pull-up/Picture10.png',
    ],
  },
  {
    slug: 'wings-for-life',
    name: 'Wings for Life World Run',
    tag: 'Running',
    cover: '/assets/images/events/wfl/SI202505042704.jpg',
    images: [
      '/assets/images/events/wfl/SI202505042704.jpg',
      '/assets/images/events/wfl/SI202511200001.jpg',
      '/assets/images/events/wfl/SI202405050173.jpg',
      '/assets/images/events/wfl/SI202305070515.jpg',
      '/assets/images/events/wfl/SI202205081206.jpg',
      '/assets/images/events/wfl/SI202205081167.jpg',
      '/assets/images/events/wfl/Picture9.png',
      '/assets/images/events/wfl/Picture11.png',
      '/assets/images/events/wfl/rb_wflwr_infogra_whatitis.jpg',
    ],
  },
];

export function getEventBySlug(slug) {
  return events.find((e) => e.slug === slug) ?? null;
}
