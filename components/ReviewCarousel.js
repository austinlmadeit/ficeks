'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ReviewCarousel({ reviews }) {
  const pageSize = 4;
  const totalPages = Math.ceil(reviews.length / pageSize);
  const [page, setPage] = useState(0);

  const nextPage = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextPage, 8000);
    return () => clearInterval(timer);
  }, [nextPage]);

  const currentReviews = reviews.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'stretch', flexWrap: 'wrap' }}>
      {/* Left side: Reviews carousel */}
      <div style={{ flex: '1 1 70%', minWidth: '300px' }}>
        <div className="grid-4" style={{ gap: '20px', marginBottom: '24px' }}>
          {currentReviews.map((review, i) => (
            <div
              key={`${page}-${i}`}
              className="card card-red-top"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#fafafa',
                borderRadius: '12px',
                padding: '24px 20px',
                border: '1px solid #e4e4e7',
                transition: 'opacity 0.3s ease',
              }}
            >
              <div>
                <div style={{ color: '#eab308', fontSize: '18px', marginBottom: '10px' }}>
                  {'★'.repeat(review.rating)}
                </div>
                {review.service && (
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#dc2626',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>
                    {review.service}
                  </div>
                )}
                <p style={{
                  fontSize: '14px',
                  color: '#3f3f46',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '16px',
                }}>
                  &quot;{review.quote}&quot;
                </p>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid #e4e4e7' }}>
                <div style={{ fontWeight: 800, fontSize: '15px', color: '#09090b' }}>
                  {review.author}
                </div>
                {review.location && (
                  <div style={{ fontSize: '12px', color: '#71717a' }}>
                    {review.location}
                  </div>
                )}
                <div style={{ fontSize: '11px', color: '#a1a1aa', marginTop: '2px' }}>
                  Google Review
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots and arrows */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <button
              onClick={prevPage}
              aria-label="Previous reviews"
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
              }}
            >
              ‹
            </button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                  style={{
                    width: idx === page ? '24px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: idx === page ? '#dc2626' : '#d4d4d8',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              aria-label="Next reviews"
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
              }}
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Right side: Leave a Review CTA */}
      <div style={{
        flex: '0 0 240px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: '#09090b',
        borderRadius: '16px',
        padding: '36px 24px',
        minHeight: '280px',
      }}>
        <div style={{
          fontSize: '40px',
          marginBottom: '10px',
        }}>
          ★
        </div>
        <h3 style={{
          fontSize: '19px',
          fontWeight: 900,
          color: '#ffffff',
          lineHeight: 1.3,
          marginBottom: '10px',
        }}>
          Did we give you five star service?
        </h3>
        <p style={{
          fontSize: '13px',
          color: '#a1a1aa',
          lineHeight: 1.5,
          marginBottom: '20px',
        }}>
          We would love to hear about your experience! Leave a review for your location:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
          <a
            href="https://share.google/gKhy3vXGGOJbKRUF5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-red"
            style={{
              fontSize: '13px',
              padding: '10px 16px',
              justifyContent: 'center',
              width: '100%',
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
              fontSize: '13px',
              padding: '10px 16px',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            Review Richmond Ave Office
          </a>
        </div>
      </div>
    </div>
  );
}
