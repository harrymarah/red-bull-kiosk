export const events = [
  {
    slug: 'gym-clash',
    name: 'Red Bull Gym Clash',
    tag: 'Strength',
    cover: '/assets/images/events/gym-clash/SI202510050040.jpg',
    headline: 'The Ultimate Gym vs Gym Fitness Battle',
    body: [
      'Red Bull Gym Clash is the ultimate gym vs gym functional-fitness event, designed by Red Bull athletes challenging gyms in power, endurance, skill, and strategy.',
      'Every gym can enter, represented by two female and two male athletes. The journey runs from National Qualifiers to National Finals and ultimately the World Final — with gyms from 28 countries battling for the title of Greatest Gym on Earth.',
    ],
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
    headline: 'Red Bull HYROX Night Shift',
    date: '23 March 2026 · 6:30pm – 10:00pm',
    location: 'London Olympia',
    body: [
      'An exclusive HYROX session by invitation only — behind closed doors, for friends and customers of Red Bull only.',
      'Expect Red Bull athletes like Jake Dearden and Lucy Procter to be welcoming you to the race, cheering you on, and perhaps pulling up next to you to race you to the finish line.',
    ],
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
    headline: 'Man vs Building',
    body: [
      'Jake Dearden takes rope pulling to the next level — attempting to pull himself 47 storeys to the top of Manchester\'s tallest skyscraper, Beetham Tower.',
    ],
    stats: [
      { value: '47', label: 'Storeys' },
      { value: '170m', label: 'Height' },
      { value: '1 hr', label: 'Target Time' },
    ],
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
    headline: 'Everyone Starts. No One Finishes.',
    body: [
      'A global run for everyone — fun runners, athletes, wheelchair participants and total beginners are all in it together against the Catcher Car.',
      'There is no finish line. Participants run as far as they can until caught by the Catcher Car. 100% of all entry fees go directly to spinal cord injury research.',
    ],
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
