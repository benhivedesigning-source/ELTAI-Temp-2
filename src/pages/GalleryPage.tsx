import React from 'react';
import { motion } from 'motion/react';
import PageBanner from '../components/PageBanner';

const GALLERY_IMAGES = [
  {
    src: "https://www.image2url.com/r2/default/images/1776255795293-05b8c1fa-1e2a-4f83-afbd-2799c6eef564.webp",
    title: "ELTAI 2025 - Chennai",
    category: "Annual Conference"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776255853963-4292ff99-94fb-46a8-a8a8-492ce4b6c4cd.webp",
    title: "ELTAI 2024 - Delhi",
    category: "Workshop Session"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776255917201-a6e240d3-fbda-4bbb-b36c-2a01ca9aa01c.webp",
    title: "ELTAI 2023 - Mumbai",
    category: "Keynote Address"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776255967219-e1567d7c-b68e-4444-ae92-4b5af6ce1681.webp",
    title: "ELTAI 2022 - Bangalore",
    category: "Interaction Group"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776256581516-8eca8059-3a4d-45ab-93a1-cd2ee69e076b.webp",
    title: "Panel Discussion",
    category: "ELTAI Highlights"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776333845022-b6006276-2f5e-4fa6-b06f-a2c07fec6e08.png",
    title: "Innovation Hub",
    category: "ELTAI Highlights"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776256958728-347bba30-f858-4570-b39c-219a012baeb1.webp",
    title: "Cultural Evening",
    category: "Annual Conference"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776257062853-3bf9fcd2-2b57-43e0-b758-9b5236fb3e49.webp",
    title: "Celebration",
    category: "Closing Ceremony"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776257129142-7edbe805-7c0d-428e-ba6d-33b30efb8369.webp",
    title: "Stage Presence",
    category: "Keynote"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776257653770-c1ca765c-55f8-42a2-aeae-3bf47a3b03ca.webp",
    title: "Engaged Audience",
    category: "Plenary Session"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776257733704-599f7799-6d25-4259-8c72-7f1f511df261.webp",
    title: "Networking",
    category: "Coffee Break"
  },
  {
    src: "https://www.image2url.com/r2/default/images/1776257988216-f13e1fcd-5f42-4310-b56d-bb6f8b35d7e8.webp",
    title: "Grand Event",
    category: "Annual Conference"
  }
];

const GalleryPage = () => {
  return (
    <main className="pt-20">
      <PageBanner 
        title={
  <>
    Event <span className="ml-1">Gallery</span>
  </>
} 
        subtitle="Moments and memories from ELTAI's rich history of conferences and educational gatherings."
        image="https://www.image2url.com/r2/default/images/1776257733704-599f7799-6d25-4259-8c72-7f1f511df261.webp"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3]"
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-primary font-bold text-xs tracking-widest capitalize mb-2">{item.category}</p>
                  <h3 className="text-white font-heading font-black text-2xl capitalize tracking-wide">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
