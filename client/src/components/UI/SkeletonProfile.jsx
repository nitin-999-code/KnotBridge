import React from 'react';

/**
 * Skeleton placeholder for a profile / detail page.
 */
const SkeletonProfile = ({ className = '' }) => {
  return (
    <div className={`skeleton-profile ${className}`} style={styles.wrapper}>
      {/* Header area */}
      <div style={styles.header}>
        <div className="skeleton-shimmer" style={styles.avatar} />
        <div style={styles.headerText}>
          <div className="skeleton-shimmer" style={styles.name} />
          <div className="skeleton-shimmer" style={styles.subtitle} />
          <div className="skeleton-shimmer" style={styles.badge} />
        </div>
      </div>

      {/* Bio / About area */}
      <div style={styles.section}>
        <div className="skeleton-shimmer" style={styles.sectionTitle} />
        <div className="skeleton-shimmer" style={styles.textLine} />
        <div className="skeleton-shimmer" style={styles.textLine} />
        <div className="skeleton-shimmer" style={{ ...styles.textLine, width: '65%' }} />
      </div>

      {/* Info grid */}
      <div style={styles.grid}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={styles.gridItem}>
            <div className="skeleton-shimmer" style={styles.gridLabel} />
            <div className="skeleton-shimmer" style={styles.gridValue} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: '#fff',
    borderRadius: 'var(--radius-lg, 14px)',
    padding: '32px',
    border: '1px solid var(--border-light, #F3F4F6)',
    boxShadow: 'var(--shadow-card, 0 2px 12px rgba(0,0,0,0.05))',
  },
  header: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid var(--border-light, #F3F4F6)',
  },
  avatar: {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  headerText: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    paddingTop: '6px',
  },
  name: {
    width: '200px',
    height: '24px',
  },
  subtitle: {
    width: '150px',
    height: '16px',
  },
  badge: {
    width: '100px',
    height: '26px',
    borderRadius: '13px',
  },
  section: {
    marginBottom: '28px',
  },
  sectionTitle: {
    width: '140px',
    height: '18px',
    marginBottom: '16px',
  },
  textLine: {
    width: '100%',
    height: '14px',
    marginBottom: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
  },
  gridItem: {
    padding: '16px',
    background: 'var(--bg-muted, #F1F4F8)',
    borderRadius: 'var(--radius-md, 10px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  gridLabel: {
    width: '80px',
    height: '12px',
  },
  gridValue: {
    width: '120px',
    height: '18px',
  },
};

export default SkeletonProfile;
