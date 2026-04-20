import React from 'react';

interface OrdinalProps {
  text: string;
}

/**
 * A component that finds ordinal suffixes (st, nd, rd, th) following numbers 
 * and wraps them in a <sup> tag for standard superscript formatting.
 */
const Ordinal: React.FC<OrdinalProps> = ({ text }) => {
  if (!text) return null;

  // Regex to match numbers followed by ordinal suffixes
  // Captures the number and the suffix separately
  const parts = text.split(/([0-9]+(?:st|nd|rd|th))/gi);

  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^([0-9]+)(st|nd|rd|th)$/i);
        if (match) {
          return (
            <span key={i} className="inline-flex items-baseline">
              {match[1]}
              <sup className="text-[0.65em] leading-none ml-[0.05em] select-none uppercase">
                {match[2]}
              </sup>
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export default Ordinal;
