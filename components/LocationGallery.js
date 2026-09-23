'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function LocationGallery({ photos = [], officeName }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback((delta) => {
    setActiveIndex((i) => (i === null ? null : (i + delta + photos.length) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, step]);

  if (!photos.length) {
    return (
      <div style={{
        border: '2px dashed #cbd5e1',
        borderRadius: '12px',
        background: '#f8fafc',
        padding: '48px 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '15px', fontWeight: 800, color: '#334155', marginBottom: '6px' }}>
          Photos coming soon
        </div>
        <div style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, maxWidth: '460px', margin: '0 auto' }}>
          We are putting together a photo tour of our {officeName} so you know exactly
          what to look for when you pull up. In the meantime, the map above will get you to our door.
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px',
      }}>
        {photos.map((photo, idx) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View larger: ${photo.alt}`}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              padding: 0,
              cursor: 'pointer',
              background: '#e2e8f0',
              display: 'block',
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${officeName} photo viewer`}
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(9, 9, 11, 0.92)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '32px',
              lineHeight: 1,
              cursor: 'pointer',
            }}
          >
            &times;
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: 'min(1000px, 92vw)', height: 'min(70vh, 700px)' }}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              sizes="92vw"
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ color: '#ffffff', marginTop: '16px', textAlign: 'center', maxWidth: '700px' }}
          >
            <div style={{ fontSize: '15px', fontWeight: 700 }}>
              {photos[activeIndex].caption || photos[activeIndex].alt}
            </div>
            {photos.length > 1 && (
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
                <button type="button" onClick={() => step(-1)} className="btn btn-outline-white" style={{ padding: '10px 20px' }}>
                  Previous
                </button>
                <span style={{ alignSelf: 'center', fontSize: '13px', color: '#a1a1aa', fontWeight: 700 }}>
                  {activeIndex + 1} / {photos.length}
                </span>
                <button type="button" onClick={() => step(1)} className="btn btn-outline-white" style={{ padding: '10px 20px' }}>
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
