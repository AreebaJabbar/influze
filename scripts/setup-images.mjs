import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  // Creators
  { name: 'creator-ethan.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', label: 'Ethan Carter' },
  { name: 'creator-sophia.jpg', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', label: 'Sophia Bennett' },
  { name: 'creator-naomi.jpg', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', label: 'Naomi Mitchell' },
  { name: 'creator-ava.jpg', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', label: 'Ava Collins' },
  { name: 'creator-lucas.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', label: 'Lucas Anderson' },
  { name: 'creator-mia.jpg', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80', label: 'Mia Thompson' },
  { name: 'creator-lisa.jpg', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80', label: 'Lisa Brooks' },
  { name: 'creator-chloe.jpg', url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80', label: 'Chloe Parker' },

  // Hero & Features
  { name: 'hero-creator-left.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80', label: 'Hero Left' },
  { name: 'hero-creator-right.jpg', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', label: 'Hero Right' },
  { name: 'about-studio.jpg', url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80', label: 'Studio Video' },
  { name: 'why-center.jpg', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80', label: 'Why Center' },
  { name: 'testimonial-video.jpg', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80', label: 'Testimonial Video' },

  // Services
  { name: 'service-1.jpg', url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80', label: 'Influencer Marketing' },
  { name: 'service-2.jpg', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80', label: 'Creator Partnerships' },
  { name: 'service-3.jpg', url: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80', label: 'Content Creation' },
  { name: 'service-4.jpg', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', label: 'Talent Management' },
  { name: 'service-5.jpg', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', label: 'Campaign Analytics' },
  { name: 'service-6.jpg', url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', label: 'Brand Collaborations' },

  // Projects
  { name: 'project-summer.jpg', url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80', label: 'Summer Style' },
  { name: 'project-glow.jpg', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80', label: 'Glow Naturally' },
  { name: 'project-explore.jpg', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', label: 'Explore Beyond' },
  { name: 'project-fitness.jpg', url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', label: '30-Day Healthy' },

  // Blog
  { name: 'blog-1.jpg', url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80', label: 'Blog 1' },
  { name: 'blog-2.jpg', url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80', label: 'Blog 2' },
  { name: 'blog-3.jpg', url: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80', label: 'Blog 3' },
  { name: 'blog-4.jpg', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', label: 'Blog 4' },
  { name: 'blog-5.jpg', url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', label: 'Blog 5' },
  { name: 'blog-6.jpg', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', label: 'Blog 6' },
];

const targetDir = path.resolve('public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(fileUrl, outputPath, fallbackLabel) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(outputPath);
    https.get(fileUrl, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', () => {
          createSvgFallback(outputPath, fallbackLabel);
          resolve();
        });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        createSvgFallback(outputPath, fallbackLabel);
        resolve();
      }
    }).on('error', () => {
      createSvgFallback(outputPath, fallbackLabel);
      resolve();
    });
  });
}

function createSvgFallback(outputPath, label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800" fill="#E2E8F0">
    <rect width="600" height="800" fill="#1E293B"/>
    <circle cx="300" cy="350" r="140" fill="#334155"/>
    <text x="300" y="360" font-family="sans-serif" font-size="28" font-weight="bold" fill="#F8FAFC" text-anchor="middle">${label}</text>
  </svg>`;
  fs.writeFileSync(outputPath, svg);
}

async function run() {
  console.log('Downloading image assets...');
  for (const item of images) {
    const filePath = path.join(targetDir, item.name);
    console.log(`Processing: ${item.name}`);
    await downloadFile(item.url, filePath, item.label);
  }
  console.log('All image assets ready in public/images!');
}

run();
