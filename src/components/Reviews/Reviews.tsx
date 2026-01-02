import React, { useState, useRef } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaUser } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      title: "Absolument magnifique !",
      content: "Les fleurs étaient encore plus belles que sur les photos. Livraison rapide et professionnelle. Je recommande vivement !",
      date: "15 Mars 2023",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Michael Brown",
      rating: 4,
      title: "Excellent service",
      content: "Commande facile, livraison à l'heure et fleurs fraîches. Mon épouse était ravie !",
      date: "2 Avril 2023",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      title: "Transformé mon salon",
      content: "Le bouquet a complètement transformé mon espace de vie. Les couleurs sont vibrantes et les fleurs ont duré longtemps.",
      date: "10 Mai 2023",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "James Wilson",
      rating: 5,
      title: "Parfait pour les événements",
      content: "Nous utilisons Fleur Marwa pour tous nos événements d'entreprise. Toujours impeccable !",
      date: "5 Juin 2023",
      verified: true
    },
    {
      id: 5,
      name: "Olivia Martinez",
      rating: 5,
      title: "La meilleure boutique !",
      content: "J'ai essayé plusieurs boutiques, mais Fleur Marwa est de loin la meilleure. La qualité et le service sont exceptionnels.",
      date: "12 Juillet 2023",
      verified: true
    },
    {
      id: 6,
      name: "David Thompson",
      rating: 4,
      title: "Service client excellent",
      content: "Le personnel m'a aidé à choisir le bouquet parfait pour notre anniversaire de mariage. Très satisfait !",
      date: "8 Août 2023",
      verified: true
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    title: '',
    content: '',
    email: ''
  });

  const [showForm, setShowForm] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleStarClick = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      title: newReview.title,
      content: newReview.content,
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
      verified: false
    };
    
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 0, title: '', content: '', email: '' });
    setShowForm(false);
    
    // Afficher un message de succès
    alert('Merci pour votre avis ! Il sera publié après modération.');
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-primary-50/30 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Avis <span className="text-primary-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de notre service et de nos créations florales.
          </p>
        </div>

        {/* Reviews Stats */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Avis vérifiés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-16">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 scroll-snap-start"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
                        {review.avatar ? (
                          <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                        ) : (
                          <FaUser className="text-primary-600 text-xl" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Vérifié
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <FaQuoteLeft className="text-primary-200 text-2xl" />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h5 className="font-bold text-gray-900 mb-2">{review.title}</h5>
                    <p className="text-gray-600 text-sm line-clamp-3">{review.content}</p>
                  </div>

                  {/* Footer */}
                  <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Add Review Button */}
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary px-8 py-4 text-lg"
          >
            Ajouter votre avis
          </button>
        </div>

        {/* Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Donnez votre avis</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        required
                        value={newReview.email}
                        onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Votre note
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleStarClick(star)}
                            className="text-2xl focus:outline-none"
                          >
                            <FaStar
                              className={star <= newReview.rating ? "text-yellow-500" : "text-gray-300"}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Titre de votre avis *
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.title}
                        onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Donnez un titre à votre avis"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Votre avis *
                      </label>
                      <textarea
                        required
                        value={newReview.content}
                        onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Partagez votre expérience..."
                        maxLength={500}
                      />
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {newReview.content.length}/500 caractères
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full btn-primary py-4"
                      >
                        Publier votre avis
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;