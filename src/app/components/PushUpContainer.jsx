import React from 'react';
import PushUp from './PushUp';
import { IoMdGlobe } from "react-icons/io";
import { RiGroupLine } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { BsMegaphone } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";


const PushUpContainer = () => {
  return (
    <div className="flex justify-around gap-x-2">
      <PushUp
        title="Méthodologie"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        color="rgba(228, 0, 1, 1)" // Rouge
        icon={<FiSettings className="text-redF text-6xl" />}
        style={{ margin: '0 10px' }}
      />

<PushUp
        title="Pour la classe"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."
        color="rgba(253, 205, 0, 1)" // Jaune
        icon={< GrGroup className="text-yellowF text-6xl" />}
        style={{ margin: '0 10px' }}
      />
      <PushUp
        title="Promotion"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        color="rgba(126, 179, 1, 1)" // Vert
        icon={< BsMegaphone className="text-greenF text-6xl" />}
        style={{ margin: '0 10px' }}
      />
     
      <div className="relative">
     
        <PushUp
          title="Pays   "
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          color="rgba(93, 0, 115, 1)" // Violet
          style={{ margin: '0 10px' }}
          icon={<IoMdGlobe className="text-purplF text-6xl" />} // Ajout de l'icône entre le texte et le bouton
          style={{ margin: '0 10px' }}
        />
      </div>
    </div>
  );
};

export default PushUpContainer;