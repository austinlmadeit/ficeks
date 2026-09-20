'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

export default function ReviewCarousel({ reviews }) {
  const [filter, setFilter] = useState('written'); // 'written', 'all', '1st', '18th'
  const cardsPerPage = 4;

  const filteredReviews = useMemo(() => {
    if (!reviews || !Array.isArray(reviews)) return [];
    if (filter === 'written') {
      return reviews.filter(r => r.quote && r.quote !== '5-star rating on Google Reviews.' && r.quote.length > 0);
    }
    if (filter === '1st') {
      return reviews.filter(r => r.location?.includes('1st'));
    }
    if (filter === '18th') {
      return reviews.filter(r => r.location?.includes('18th'));
    }
    return reviews;
  }, [reviews, filter]);

  const totalPages = Math.max(1, Math.ceil(filteredReviews.length / cardsPerPage));
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filter]);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-slide every 7 seconds if not hovered
  useEffect(() => {
    if (isHovered || totalPages <= 1) return;
    const interval = setInterval(nextPage, 7000);
    return () => clearInterval(interval);
  }, [nextPage, isHovered, totalPages]);

  const writtenCount = useMemo(() => {
    return reviews.filter(r => r.quote && r.quote !== '5-star rating on Google Reviews.').length;
  }, [reviews]);

  const firstStCount = useMemo(() => {
    return reviews.filter(r => r.location?.includes('1st')).length;
  }, [reviews]);

  const eighteenthStCount = useMemo(() => {
    return reviews.filter(r => r.location?.includes('18th')).length;
  }, [reviews]);

  return (
    <div style={{ width: '100%' }}>
      {/* Category / Location Filter Tabs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        marginBottom: '28px',
      }}>
        <button
          onClick={() => setFilter('written')}
          style={{
            padding: '8px 16px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            border: filter === 'written' ? '1px solid #dc2626' : '1px solid #e4e4e7',
            background: filter === 'written' ? '#dc2626' : '#f4f4f5',
            color: filter === 'written' ? '#ffffff' : '#3f3f46',
            transition: 'all 0.2s ease',
          }}
        >
          Written Stories ({writtenCount})
        </button>

        <button
          onClick={() => setFilter('all')}
          style={{
            padding: '8px 16px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            border: filter === 'all' ? '1px solid #dc2626' : '1px solid #e4e4e7',
            background: filter === 'all' ? '#dc2626' : '#f4f4f5',
            color: filter === 'all' ? '#ffffff' : '#3f3f46',
            transition: 'all 0.2s ease',
          }}
        >
          All 5-Star Reviews ({reviews.length})
        </button>

        <button
          onClick={() => setFilter('1st')}
          style={{
            padding: '8px 16px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            border: filter === '1st' ? '1px solid #dc2626' : '1px solid #e4e4e7',
            background: filter === '1st' ? '#dc2626' : '#f4f4f5',
            color: filter === '1st' ? '#ffffff' : '#3f3f46',
            transition: 'all 0.2s ease',
          }}
        >
          1439 1st Street Office ({firstStCount})
        </button>

        <button
          onClick={() => setFilter('18th')}
          style={{
            padding: '8px 16px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            border: filter === '18th' ? '1px solid #dc2626' : '1px solid #e4e4e7',
            background: filter === '18th' ? '#dc2626' : '#f4f4f5',
            color: filter === '18th' ? '#ffffff' : '#3f3f46',
            transition: 'all 0.2s ease',
          }}
        >
          1525 18th Street Office ({eighteenthStCount})
        </button>
      </div>

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
                const pageReviews = filteredReviews.slice(pageIdx * cardsPerPage, (pageIdx + 1) * cardsPerPage);
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
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <div style={{ color: '#eab308', fontSize: '15px' }}>
                              {'★'.repeat(review.rating)}
                            </div>
                            {review.date && (
                              <span style={{ fontSize: '10px', color: '#a1a1aa' }}>
                                {review.date}
                              </span>
                            )}
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
                          <div style={{ fontSize: '10px', color: '#a1a1aa', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                            </svg>
                            Verified Google Review
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls: Slide Dots / Page Counter & Arrows */}
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

              {/* Dots if small count, else Page badge */}
              {totalPages <= 8 ? (
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
              ) : (
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#52525b',
                  background: '#f4f4f5',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid #e4e4e7',
                }}>
                  Page {currentPage + 1} of {totalPages}
                </div>
              )}

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
    </div>
  );
}
