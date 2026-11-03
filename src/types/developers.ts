export type Developer = {
  id: string;
  name: string;
  role: string;
  photo: string;
  telegram: string;
  github: string;
  linkedin?: string;
};

export const developers: Developer[] = [
  {
    id: 'dev-5',
    name: 'Illia Sumar',
    role: 'Tech Lead',
    photo: 'img/team/dev-5.webp',
    telegram: 'Sumar_illya',
    github: 'https://github.com/GrizlixXx',
  },
  {
    id: 'dev-3',
    name: 'Sofia Tsebenko',
    role: 'Project Manager',
    photo: 'img/team/dev-3.webp',
    telegram: 'x1x1x1x1x1x1',
    github: 'https://github.com/sofiatsebenko',
  },
  {
    id: 'dev-1',
    name: 'Illia Shlianin',
    role: 'Frontend Developer',
    photo: 'img/team/dev-1.webp',
    telegram: 'irecurse',
    github: 'https://github.com/recurse1337',
    linkedin: 'https://www.linkedin.com/in/illia-shlianin-b320b3444',
  },
  {
    id: 'dev-2',
    name: 'Artem Maiboroda',
    role: 'Frontend Developer',
    photo: 'img/team/dev-2.webp',
    telegram: 'art_may',
    github: 'https://github.com/ArtMay777',
  },
  {
    id: 'dev-4',
    name: 'Kyrylo Matvieiev',
    role: 'Frontend Developer',
    photo: 'img/team/dev-4.webp',
    telegram: 'Khar1zma',
    github: 'https://github.com/kirushamatvieiev008',
    linkedin: 'https://www.linkedin.com/in/кіріл-матвєєв-a8a7743a8',
  },
];
