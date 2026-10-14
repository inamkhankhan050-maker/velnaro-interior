const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const serviceContent = {
  home: {
    kicker: 'ALL THE DETAILS, IN ONE PLACE',
    title: 'Complete home interiors',
    description: 'Bring the whole home together with coordinated finishing work, carefully considered details and a clear point of contact.',
    points: ['Painting and wall finishes', 'Kitchens and home fittings', 'Ironwork, fabrics and finishing'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=90',
    alt: 'Warm modern living room with considered furnishings',
  },
  paint: {
    kicker: 'COLOUR THAT CHANGES THE FEEL OF A ROOM',
    title: 'Painting & wall finishes',
    description: 'Refresh your home with considered colour, neat painting and the wall finishes that help each room feel complete.',
    points: ['Interior wall painting', 'Colour choices for your rooms', 'Fresh finishes and touch-ups'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1300&q=90',
    alt: 'Bright living room with soft colours and finished walls',
  },
  kitchen: {
    kicker: 'A PLACE FOR EVERYDAY MOMENTS',
    title: 'Kitchen work',
    description: 'Plan a kitchen that feels right for your home, from practical details and fittings to the look and finish.',
    points: ['Kitchen interior work', 'Fittings and finish details', 'Thoughtful everyday layouts'],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1300&q=90',
    alt: 'Modern home kitchen with warm wood finishes',
  },
  iron: {
    kicker: 'CRAFTED DETAILS FOR YOUR SPACE',
    title: 'Ironwork & fittings',
    description: 'Bring function and character into a room with interior ironwork and fittings suited to your home.',
    points: ['Interior ironwork', 'Made-to-fit home details', 'Finishes that work with your space'],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1300&q=90',
    alt: 'Contemporary home interior with crafted details',
  },
  fabric: {
    kicker: 'TEXTURE MAKES A ROOM FEEL FINISHED',
    title: 'Fabric & curtains',
    description: 'Add softness, colour and texture with fabric choices, curtains and home finishing touches.',
    points: ['Curtains and fabric', 'Soft furnishing details', 'Finishing touches for your rooms'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1300&q=90',
    alt: 'Layered living room with fabric, texture and warm light',
  },
};

const tabs = document.querySelectorAll('.service-tab');
const featureImage = document.querySelector('#service-image');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    const content = serviceContent[tab.dataset.service];
    document.querySelector('#service-kicker').textContent = content.kicker;
    document.querySelector('#service-title').textContent = content.title;
    document.querySelector('#service-description').textContent = content.description;
    document.querySelector('#service-points').innerHTML = content.points.map((point) => `<li><span>✓</span> ${point}</li>`).join('');
    featureImage.src = content.image;
    featureImage.alt = content.alt;
  });
});

document.querySelector('#lead-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const message = [
    'Hi Velnaro Interior, I would like to discuss work for my home.',
    `Name: ${fields.get('name')}`,
    `Phone: ${fields.get('phone')}`,
    `Email: ${fields.get('email') || 'Not provided'}`,
    `City: ${fields.get('city') || 'Not provided'}`,
    `Work needed: ${fields.get('service')}`,
  ].join('\n');
  window.open(`https://wa.me/917678365870?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
