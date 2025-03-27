import React from 'react';

interface NetworkBackgroundProps {
  children: React.ReactNode;
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <g>
          {/* Dots */}
          <circle cx="100" cy="100" r="3" className="network-dot" />
          <circle cx="240" cy="150" r="3" className="network-dot" />
          <circle cx="380" cy="80" r="3" className="network-dot" />
          <circle cx="520" cy="180" r="3" className="network-dot" />
          <circle cx="670" cy="120" r="3" className="network-dot" />
          <circle cx="800" cy="210" r="3" className="network-dot" />
          <circle cx="950" cy="150" r="3" className="network-dot" />
          
          <circle cx="50" cy="300" r="3" className="network-dot" />
          <circle cx="180" cy="250" r="3" className="network-dot" />
          <circle cx="320" cy="350" r="3" className="network-dot" />
          <circle cx="440" cy="280" r="3" className="network-dot" />
          <circle cx="590" cy="310" r="3" className="network-dot" />
          <circle cx="710" cy="380" r="3" className="network-dot" />
          <circle cx="860" cy="300" r="3" className="network-dot" />
          <circle cx="980" cy="360" r="3" className="network-dot" />
          
          <circle cx="120" cy="450" r="3" className="network-dot" />
          <circle cx="240" cy="400" r="3" className="network-dot" />
          <circle cx="380" cy="480" r="3" className="network-dot" />
          <circle cx="520" cy="420" r="3" className="network-dot" />
          <circle cx="650" cy="500" r="3" className="network-dot" />
          <circle cx="780" cy="450" r="3" className="network-dot" />
          <circle cx="920" cy="520" r="3" className="network-dot" />
          
          <circle cx="70" cy="580" r="3" className="network-dot" />
          <circle cx="190" cy="620" r="3" className="network-dot" />
          <circle cx="320" cy="550" r="3" className="network-dot" />
          <circle cx="450" cy="640" r="3" className="network-dot" />
          <circle cx="580" cy="590" r="3" className="network-dot" />
          <circle cx="720" cy="660" r="3" className="network-dot" />
          <circle cx="850" cy="600" r="3" className="network-dot" />
          <circle cx="950" cy="680" r="3" className="network-dot" />
          
          <circle cx="100" cy="750" r="3" className="network-dot" />
          <circle cx="240" cy="720" r="3" className="network-dot" />
          <circle cx="370" cy="790" r="3" className="network-dot" />
          <circle cx="510" cy="730" r="3" className="network-dot" />
          <circle cx="640" cy="810" r="3" className="network-dot" />
          <circle cx="780" cy="750" r="3" className="network-dot" />
          <circle cx="920" cy="820" r="3" className="network-dot" />
          
          <circle cx="50" cy="900" r="3" className="network-dot" />
          <circle cx="180" cy="870" r="3" className="network-dot" />
          <circle cx="320" cy="940" r="3" className="network-dot" />
          <circle cx="460" cy="880" r="3" className="network-dot" />
          <circle cx="600" cy="950" r="3" className="network-dot" />
          <circle cx="740" cy="900" r="3" className="network-dot" />
          <circle cx="880" cy="970" r="3" className="network-dot" />
          <circle cx="980" cy="920" r="3" className="network-dot" />
          
          {/* Lines */}
          <line x1="100" y1="100" x2="240" y2="150" className="network-line" />
          <line x1="240" y1="150" x2="380" y2="80" className="network-line" />
          <line x1="380" y1="80" x2="520" y2="180" className="network-line" />
          <line x1="520" y1="180" x2="670" y2="120" className="network-line" />
          <line x1="670" y1="120" x2="800" y2="210" className="network-line" />
          <line x1="800" y1="210" x2="950" y2="150" className="network-line" />
          
          <line x1="100" y1="100" x2="50" y2="300" className="network-line" />
          <line x1="240" y1="150" x2="180" y2="250" className="network-line" />
          <line x1="380" y1="80" x2="320" y2="350" className="network-line" />
          <line x1="520" y1="180" x2="440" y2="280" className="network-line" />
          <line x1="670" y1="120" x2="590" y2="310" className="network-line" />
          <line x1="800" y1="210" x2="710" y2="380" className="network-line" />
          <line x1="950" y1="150" x2="860" y2="300" className="network-line" />
          
          <line x1="50" y1="300" x2="120" y2="450" className="network-line" />
          <line x1="180" y1="250" x2="240" y2="400" className="network-line" />
          <line x1="320" y1="350" x2="380" y2="480" className="network-line" />
          <line x1="440" y1="280" x2="520" y2="420" className="network-line" />
          <line x1="590" y1="310" x2="650" y2="500" className="network-line" />
          <line x1="710" y1="380" x2="780" y2="450" className="network-line" />
          <line x1="860" y1="300" x2="920" y2="520" className="network-line" />
          
          <line x1="120" y1="450" x2="70" y2="580" className="network-line" />
          <line x1="240" y1="400" x2="190" y2="620" className="network-line" />
          <line x1="380" y1="480" x2="320" y2="550" className="network-line" />
          <line x1="520" y1="420" x2="450" y2="640" className="network-line" />
          <line x1="650" y1="500" x2="580" y2="590" className="network-line" />
          <line x1="780" y1="450" x2="720" y2="660" className="network-line" />
          <line x1="920" y1="520" x2="850" y2="600" className="network-line" />
          
          <line x1="70" y1="580" x2="100" y2="750" className="network-line" />
          <line x1="190" y1="620" x2="240" y2="720" className="network-line" />
          <line x1="320" y1="550" x2="370" y2="790" className="network-line" />
          <line x1="450" y1="640" x2="510" y2="730" className="network-line" />
          <line x1="580" y1="590" x2="640" y2="810" className="network-line" />
          <line x1="720" y1="660" x2="780" y2="750" className="network-line" />
          <line x1="850" y1="600" x2="920" y2="820" className="network-line" />
          
          <line x1="100" y1="750" x2="50" y2="900" className="network-line" />
          <line x1="240" y1="720" x2="180" y2="870" className="network-line" />
          <line x1="370" y1="790" x2="320" y2="940" className="network-line" />
          <line x1="510" y1="730" x2="460" y2="880" className="network-line" />
          <line x1="640" y1="810" x2="600" y2="950" className="network-line" />
          <line x1="780" y1="750" x2="740" y2="900" className="network-line" />
          <line x1="920" y1="820" x2="880" y2="970" className="network-line" />
          
          <line x1="180" y1="250" x2="320" y2="350" className="network-line" />
          <line x1="240" y1="400" x2="380" y2="480" className="network-line" />
          <line x1="520" y1="420" x2="650" y2="500" className="network-line" />
          <line x1="70" y1="580" x2="190" y2="620" className="network-line" />
          <line x1="450" y1="640" x2="580" y2="590" className="network-line" />
          <line x1="100" y1="750" x2="240" y2="720" className="network-line" />
          <line x1="510" y1="730" x2="640" y2="810" className="network-line" />
          <line x1="780" y1="750" x2="920" y2="820" className="network-line" />
        </g>
      </svg>
      
      {/* Geometric shapes in the background */}
      <div className="absolute top-20 right-10 w-64 h-64 rotate-45 geometric-shape opacity-20"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 rotate-12 geometric-shape opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-80 h-80 -rotate-12 geometric-shape opacity-10"></div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NetworkBackground;
