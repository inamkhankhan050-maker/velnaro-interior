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
    points: ['Painting, wallpaper and wall moulding', 'Kitchens, PVC and ceiling work', 'Wardrobes, ironwork and fabrics'],
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
    image: 'https://images.unsplash.com/photo-1776395159817-2c431529dab2?auto=format&fit=crop&w=1400&q=90',
    alt: 'Modern kitchen with island, cabinets and seating area',
  },
  moulding: {
    kicker: 'FRAME YOUR WALLS WITH DETAIL',
    title: 'Moulding & panelling',
    description: 'Add depth and character with wall moulding, decorative panelling and details that suit your home.',
    points: ['Wall moulding designs', 'Decorative wall panelling', 'Finishes matched to your room'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1300&q=90',
    alt: 'Elegant living room with decorative wall details',
  },
  pvc: {
    kicker: 'SMART FINISHES FOR YOUR HOME',
    title: 'PVC work',
    description: 'Explore practical PVC panels and finishes for ceilings, walls and selected home interiors.',
    points: ['PVC ceiling panels', 'Wall panels and cladding', 'Clean, coordinated finishes'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=90',
    alt: 'Contemporary home interior with clean wall and ceiling finishes',
  },
  wallpaper: {
    kicker: 'A NEW LOOK FOR YOUR WALLS',
    title: 'Wallpaper & wall texture',
    description: 'Bring colour, pattern and texture to a room with wallpaper and decorative wall finishes.',
    points: ['Wallpaper selection and fitting', 'Feature walls and patterns', 'Textured wall finishes'],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1300&q=90',
    alt: 'Living room with soft colour and textured wall finishes',
  },
  ceiling: {
    kicker: 'LIGHT, SHAPE AND FINISH',
    title: 'False ceiling',
    description: 'Complete your rooms with considered ceiling designs and finishing details for your home.',
    points: ['False ceiling designs', 'Ceiling finishing details', 'Plan for lighting placement'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=90',
    alt: 'Finished contemporary living room with layered ceiling design',
  },
  carpentry: {
    kicker: 'MADE TO FIT YOUR EVERYDAY',
    title: 'Wardrobes & carpentry',
    description: 'Make better use of your space with wardrobe work, storage and practical carpentry details.',
    points: ['Wardrobes and storage', 'Home carpentry work', 'Fittings and finish details'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=90',
    alt: 'Warm contemporary interior with custom wood details',
  },
  iron: {
    kicker: 'MADE TO FIT YOUR HOME & SITE',
    title: 'Gates, grills & railings',
    description: 'Custom iron and MS work for entrances, balconies, staircases, windows and boundary areas.',
    points: ['Main gates, MS doors and window frames', 'Balcony and staircase railings', 'Safety grills and boundary fencing'],
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1300&q=90',
    alt: 'Contemporary home with custom ironwork and architectural details',
  },
  steel: {
    kicker: 'FABRICATED FOR STRENGTH & USE',
    title: 'Sheds & steel structures',
    description: 'Custom steel fabrication for covered spaces, access, storage and commercial or industrial projects.',
    points: ['Industrial sheds, canopies and rolling shutters', 'Outdoor cabins and sheltered spaces', 'Mezzanine floors, platforms and steel staircases'],
    image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1300&q=90',
    alt: 'Modern steel and glass architecture with structural detailing',
  },
  fabric: {
    kicker: 'TEXTURE MAKES A ROOM FEEL FINISHED',
    title: 'Fabric & curtains',
    description: 'Add softness, colour and texture with fabric choices, curtains and home finishing touches.',
    points: ['Curtains and fabric', 'Soft furnishing details', 'Finishing touches for your rooms'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1300&q=90',
    alt: 'Layered living room with fabric, texture and warm light',
  },
  flooring: {
    kicker: 'A FINISH THAT GROUNDS THE ROOM',
    title: 'Flooring & tiling',
    description: 'Choose floor finishes that work with your rooms, your home and the look you want to create.',
    points: ['Flooring options for your home', 'Tile and finish choices', 'Coordinated room finishes'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=90',
    alt: 'Bright home interior with warm finished flooring',
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
