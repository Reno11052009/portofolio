export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

const getPKLPeriod = () => {
  const start = new Date('2025-12-01T00:00:00');
  const end = new Date('2026-12-05T00:00:00');
  const now = new Date();
  
  const isFinished = now > end;
  const targetDate = isFinished ? end : now;
  
  let months = (targetDate.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += targetDate.getMonth();
  
  let durationText = '';
  if (months <= 0) {
    const diffTime = Math.abs(targetDate.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    durationText = `${diffDays} Days`;
  } else {
    durationText = `${months} Months`;
  }

  const endText = isFinished ? 'Dec 5 2026' : 'Present';
  return `Dec 1 2025 - ${endText} (${durationText})`;
};

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Web Developer Intern (PKL)',
    company: 'PT Rowelin Persada Utama',
    period: getPKLPeriod(),
    description: 'Undergoing internship (PKL) as a Web Developer. Developing web systems for company needs, managing databases, and gaining hands-on experience in a professional environment.',
  },
  {
    id: 2,
    role: 'Software Engineering Student',
    company: 'SMK PGRI 3 Malang (Batch 37)',
    period: 'Present',
    description: 'Studying programming fundamentals, Software Engineering, algorithm design, Object-Oriented Programming (OOP), and various modern web technologies.',
  },
  {
    id: 3,
    role: 'Full Stack Web Developer',
    company: '',
    period: '2024 - Present',
    description: 'Building modern and responsive web and mobile applications using React, Laravel, Node.js, and Flutter. Involved in creating complex platforms such as digital bio platforms with Midtrans integration and real-time chat applications using WebSockets.',
  },
];

export default experiences;
