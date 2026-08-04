/* ============================================
   PROFILE.JS — Professional Data
   ============================================ */

const Profile = Object.freeze({
  name: 'Willian Rosa',
  initials: 'WR',
  role: 'Software Engineer',
  email: 'py.criador@gmail.com',
  github: 'https://github.com/pycriador',
  resume: 'resume.html',

  meta: {
    pt: {
      title: 'Willian Rosa — Software Engineer | Portfólio',
      description: 'Software Engineer especializado em plataformas corporativas, arquitetura de software, automação e Inteligência Artificial.',
      keywords: 'software engineer, engenheiro de software, arquitetura de software, SaaS, automação, inteligência artificial, web development, cloud',
    },
    en: {
      title: 'Willian Rosa — Software Engineer | Portfolio',
      description: 'Software Engineer specializing in enterprise platforms, software architecture, automation, and Artificial Intelligence.',
      keywords: 'software engineer, software architecture, SaaS, automation, artificial intelligence, web development, cloud infrastructure',
    },
    es: {
      title: 'Willian Rosa — Software Engineer | Portafolio',
      description: 'Software Engineer especializado en plataformas corporativas, arquitectura de software, automatización e Inteligencia Artificial.',
      keywords: 'software engineer, arquitectura de software, SaaS, automatización, inteligencia artificial, desarrollo web, cloud',
    },
  },
});

if (typeof module !== 'undefined') module.exports = Profile;
