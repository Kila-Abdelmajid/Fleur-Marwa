import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  social: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
    linkedin?: string;
  };
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Abdelkader",
      role: "Fleuriste Principal",
      phone: "0612345678",
      email: "abdelkader@gmail.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#"
      }
    },
    {
      id: 2,
      name: "Rachid",
      role: "Designer Floral",
      phone: "0623456789",
      email: "rachid@gmail.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#"
      }
    },
    {
      id: 3,
      name: "Abdelmajid",
      role: "Developpeur Web",
      phone: "0634567890",
      email: "Abdelmajid@gmail.com",
      image: "https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-businessman-father-grandfather_693685_wh1200.png",
      social: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Fatima",
      role: "Experte en Parfums",
      phone: "0645678901",
      email: "fatima@gmail.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#"
      }
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-white to-primary-50/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre <span className="text-primary-600">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rencontrez notre équipe de passionnés dédiés à créer les plus beaux arrangements floraux pour vous.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name & Role */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.role}</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <FaPhone className="text-primary-500" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <FaEnvelope className="text-primary-500" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label={`Facebook de ${member.name}`}
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                        aria-label={`Instagram de ${member.name}`}
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {member.social.whatsapp && (
                      <a
                        href={member.social.whatsapp}
                        className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                        aria-label={`WhatsApp de ${member.name}`}
                      >
                        <FaWhatsapp />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                Expert
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
            <div className="text-gray-600">Années d'expérience</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction garantie</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;