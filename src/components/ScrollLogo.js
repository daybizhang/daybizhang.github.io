import { useState, useEffect } from 'react';

const ScrollLogo = ({ initialSize = 80, minSize = 40, seoData }) => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(initialSize);
  const [oldLogoSize, setOldLogoSize] = useState(initialSize);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset, 2);
      let newLogoSize = initialSize - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > minSize) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize, initialSize, minSize]);

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "absolute",
    top: stayLogo ? "2vh" : "auto",
    right: "0.25vh",
    zIndex: 999,
    border: stayLogo ? "0.25rem solid white" : "0.50rem solid white",
    borderRadius: "50%", 
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
    marginTop: stayLogo ? "8vh" : "0%",
    width: `${logoSize}px`,
    height: `${logoSize}px`,
    transition: 'all 0.3s ease',
    overflow: 'hidden' 
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    borderRadius: '50%'
  };

  return (
    <div style={logoStyle}>
      <img 
        src={seoData?.logo || 'logo.png'} 
        alt={seoData?.title || 'Logo'}
        style={imageStyle}
      />
    </div>
  );
};

export default ScrollLogo;