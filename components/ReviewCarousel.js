'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ReviewCarousel({ reviews }) {
  const cardsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-slide every 6 seconds if not hovered
  useEffect(() => {
    if (isHovered || totalPages <= 1) return;
    const interval = setInterval(nextPage, 6000);
    return () => clearInterval(interval);
  }, [nextPage, isHovered, totalPages]);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 260px',
      gap: '28px',
      alignItems: 'stretch',
    }} className="review-carousel-container">
      <style jsx>{`
        @media (max-width: 1024px) {
          .review-carousel-container {
            grid-template-columns: 1fr !important;
          }
          .review-grid-page {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .review-grid-page {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Left side: Smooth Sliding Reviews Track */}
      <div 
        style={{ width: '100%', overflow: 'hidden' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Sliding Track Viewport */}
        <div style={{ overflow: 'hidden', width: '100%', borderRadius: '12px', paddingBottom: '12px' }}>
          <div
            style={{
              display: 'flex',
              transform: `translateX(-${currentPage * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              width: '100%',
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageReviews = reviews.slice(pageIdx * cardsPerPage, (pageIdx + 1) * cardsPerPage);
              return (
                <div
                  key={pageIdx}
                  className="review-grid-page"
                  style={{
                    flex: '0 0 100%',
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '16px',
                    boxSizing: 'border-box',
                  }}
                >
                  {pageReviews.map((review, i) => (
                    <div
                      key={i}
                      className="card card-red-top"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        background: '#fafafa',
                        borderRadius: '12px',
                        padding: '22px 18px',
                        border: '1px solid #e4e4e7',
                        minHeight: '230px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div>
                        <div style={{ color: '#eab308', fontSize: '15px', marginBottom: '8px' }}>
                          {'★'.repeat(review.rating)}
                        </div>
                        {review.service && (
                          <div style={{
                            fontSize: '10px',
                            fontWeight: 800,
                            color: '#dc2626',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '8px',
                          }}>
                            {review.service}
                          </div>
                        )}
                        <p style={{
                          fontSize: '13px',
                          color: '#3f3f46',
                          lineHeight: 1.55,
                          fontStyle: 'italic',
                          marginBottom: '14px',
                        }}>
                          &quot;{review.quote}&quot;
                        </p>
                      </div>

                      <div style={{ paddingTop: '12px', borderTop: '1px solid #e4e4e7' }}>
                        <div style={{ fontWeight: 800, fontSize: '14px', color: '#09090b' }}>
                          {review.author}
                        </div>
                        {review.location && (
                          <div style={{ fontSize: '11px', color: '#71717a' }}>
                            {review.location}
                          </div>
                        )}
                        <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '2px' }}>
                          Google Review
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls: Slide Dots & Arrows */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '12px',
          }}>
            <button
              onClick={prevPage}
              aria-label="Previous slide"
              style={{
                background: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '18px',
                fontWeight: 900,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(220, 38, 38, 0.3)',
                transition: 'transform 0.2s ease',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ‹
            </button>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  aria-label={`Slide to page ${idx + 1}`}
                  style={{
                    width: idx === currentPage ? '24px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: idx === currentPage ? '#dc2626' : '#d4d4d8',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              aria-label="Next slide"
              style={{
                background: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '18px',
                fontWeight: 900,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(220, 38, 38, 0.3)',
                transition: 'transform 0.2s ease',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Right side: Leave a Review CTA */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: '#09090b',
        borderRadius: '16px',
        padding: '32px 20px',
        minHeight: '260px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          fontSize: '32px',
          color: '#eab308',
          marginBottom: '8px',
        }}>
          ★★★★★
        </div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 900,
          color: '#ffffff',
          lineHeight: 1.35,
          marginBottom: '8px',
        }}>
          Did we give you 5-star service?
        </h3>
        <p style={{
          fontSize: '12px',
          color: '#a1a1aa',
          lineHeight: 1.5,
          marginBottom: '20px',
        }}>
          We would love your feedback! Leave a 5-star review on Google:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
          <a
            href="https://share.google/gKhy3vXGGOJbKRUF5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-red"
            style={{
              fontSize: '12px',
              padding: '10px 14px',
              justifyContent: 'center',
              width: '100%',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
          >
            Review 1st Street Office
          </a>
          <a
            href="https://share.google/tNPbQMipfx1EJtWeC"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-white"
            style={{
              fontSize: '12px',
              padding: '10px 14px',
              justifyContent: 'center',
              width: '100%',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
          >
            Review Richmond Ave Office
          </a>
        </div>
      </div>
    </div>
  );
}
