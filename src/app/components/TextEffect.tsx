import React, { useEffect } from 'react';
import { AutoWriteText } from '../components/AutoWriteText';

const styles = {
  textLowercase: {
    textTransform: 'none',
    fontFamily: "'Courier New', monospace",
    textAlign: 'center',
    fontSize: '1rem',
    color: 'blue',
  },
  lineContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  line: {
    whiteSpace: 'nowrap',
  }
};

const TextEffect = () => {
  useEffect(() => {
    // Cette fonction injecte les keyframes dans la feuille de style lors du premier rendu
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes fadeIn {
        to {
          opacity: 1;
          transform: scale(1.2);
        }
      }
    `, styleSheet.cssRules.length);
  }, []);

  return (
    <div className="inset-0 flex items-center justify-center y-4">
      <div>
        <div style={styles.textLowercase}>
          <p className="font-semibold text-white">
            <div style={styles.lineContainer}>
              <span data-fv-anim='autowrite' data-fv-data="Des ressources pour l’enseignement des disciplines en français dans les sections bilingues francophones" style={styles.line}>
                <AutoWriteText text="Des ressources pour l’enseignement des disciplines en français dans les sections bilingues francophones" />
              </span>
              <span data-fv-anim='autowrite' data-fv-data="en français dans les sections bilingues francophones" style={styles.line}>
                <AutoWriteText text="en français dans les sections bilingues francophones" />
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextEffect;
