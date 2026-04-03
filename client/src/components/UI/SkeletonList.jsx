import React from 'react';

/**
 * Skeleton placeholder for list / table rows.
 */
const SkeletonList = ({ rows = 5, className = '' }) => {
  const items = Array.from({ length: rows }, (_, i) => (
    <div key={i} className={`skeleton-list-row ${className}`} style={styles.row}>
      <div className="skeleton-shimmer" style={styles.avatar} />
      <div style={styles.content}>
        <div className="skeleton-shimmer" style={styles.line1} />
        <div className="skeleton-shimmer" style={styles.line2} />
      </div>
      <div className="skeleton-shimmer" style={styles.badge} />
    </div>
  ));

  return <div style={styles.wrapper}>{items}</div>;
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 20px',
    background: '#fff',
    borderRadius: 'var(--radius-md, 10px)',
    border: '1px solid var(--border-light, #F3F4F6)',
  },
  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  line1: {
    width: '55%',
    height: '16px',
  },
  line2: {
    width: '35%',
    height: '12px',
  },
  badge: {
    width: '72px',
    height: '28px',
    borderRadius: '14px',
    flexShrink: 0,
  },
};

export default SkeletonList;
