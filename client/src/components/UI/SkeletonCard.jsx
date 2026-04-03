import React from 'react';

/**
 * Skeleton placeholder for a card-shaped element.
 * Shows a pulsing shimmer animation while data loads.
 */
const SkeletonCard = ({ count = 1, className = '' }) => {
  const cards = Array.from({ length: count }, (_, i) => (
    <div key={i} className={`skeleton-card ${className}`} style={styles.card}>
      {/* Image area */}
      <div className="skeleton-shimmer" style={styles.image} />
      {/* Content area */}
      <div style={styles.body}>
        <div className="skeleton-shimmer" style={styles.tag} />
        <div className="skeleton-shimmer" style={styles.title} />
        <div className="skeleton-shimmer" style={styles.line1} />
        <div className="skeleton-shimmer" style={styles.line2} />
        <div style={styles.footer}>
          <div className="skeleton-shimmer" style={styles.avatar} />
          <div className="skeleton-shimmer" style={styles.name} />
        </div>
      </div>
    </div>
  ));

  return <>{cards}</>;
};

const styles = {
  card: {
    background: '#fff',
    borderRadius: 'var(--radius-lg, 14px)',
    border: '1px solid var(--border-light, #F3F4F6)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-card, 0 2px 12px rgba(0,0,0,0.05))',
  },
  image: {
    width: '100%',
    height: '200px',
  },
  body: {
    padding: '20px',
  },
  tag: {
    width: '80px',
    height: '20px',
    marginBottom: '12px',
    borderRadius: '20px',
  },
  title: {
    width: '85%',
    height: '22px',
    marginBottom: '10px',
  },
  line1: {
    width: '100%',
    height: '14px',
    marginBottom: '8px',
  },
  line2: {
    width: '60%',
    height: '14px',
    marginBottom: '18px',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingTop: '14px',
    borderTop: '1px solid var(--border-light, #F3F4F6)',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  name: {
    width: '100px',
    height: '14px',
  },
};

export default SkeletonCard;
