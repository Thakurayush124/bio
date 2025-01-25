import React, { useState } from 'react';
import { ChevronDown, Globe, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Added image paths for each dropdown menu
  const dropdownImages = {
    'Our Work': 'Tajikistan-flowers.jpg',
    'Grants': 'Aymara_People_Los_Uros__Lake_Titicaca__Peru.jpg',
    'Impact': 'ecuador-190707-a3893.jpg',
    'About': 'ci_86214103_Full.jpg',
    'Models':'ic7.png'
  };

  // Added button text for each dropdown
  const exploreButtons = {
    'Our Work': 'EXPLORE THE HOTSPOTS',
    'Grants': 'VIEW GRANT OPPORTUNITIES',
    'Impact': 'SEE OUR IMPACT',
    'About': 'MEET OUR TEAM',
    'Models':'explore 🛠️'
  };

  const menuItems = {
    'Our Work': [
      {  isHeader: true },
       'Our Work',
      'Biodiversity',
      'Civil Society',
      'Biodiversity Hotspots',
      'Hotspots Defined',
      'Ecosystem Profile Defined'
    ],
    'Grants': [
      'Grant Overview',
      'Application Process',
      'Eligibility',
      'Current Projects',
       'Eligibility',
      'Current Projects'
    ],
    'Impact': [
      'Impact Overview',
      'Success Stories',
      'Reports',
      'Case Studies','Reports',
      'Case Studies'
    ],
    'About': [
      'Who We Are',
      'Our Mission',
      'Team',
      'Contact Us',
      'Team',
      'Contact Us'
    ],
    'Models': [
      'ForestFlux ',
      'LifeLens',
      'Neptune’s Watch',
      "Model 4",
      'Model 5',
    ],
  };

  const NavItem = ({ title, hasDropdown = false }) => (
    <div 
      className="nav-item"
      onMouseEnter={() => hasDropdown && setActiveDropdown(title)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="nav-item-content">
        <span className="nav-item-title">{title}</span>
        {hasDropdown && (
          <ChevronDown 
            className={`nav-item-icon ${activeDropdown === title ? 'rotated' : ''}`}
          />
        )}
      </div>
      
      {hasDropdown && activeDropdown === title && (
        <div className="dropdown">
          <div className="dropdown-content">
            <div className="dropdown-menu">
              <div className="menu-line"></div>
              {menuItems[title].map((item, index) => {
  let hrefValue = '#'; // Default value
  if (typeof item === 'string') {
    hrefValue = `/path-to-${item.replace(/\s+/g, '-').toLowerCase()}`; // Generate href for string items
  }

  console.log(`Generated href for item "${typeof item === 'string' ? item : item.title}":`, hrefValue); // Log the href

  return typeof item === 'object' && item.isHeader ? (
    <div key={index} className="menu-header">
      {item.title}
    </div>
  ) : (
    <a key={index} href={hrefValue} className="menu-item">
      {typeof item === 'string' ? item : ''}
    </a>
  );
})}
            </div>

            <div className="image-section">
              <div className="image-container">
                <img 
                  src={dropdownImages[title]} 
                  alt={`${title} illustration`} 
                />
              </div>
              <button className="explore-button">
                <span>{exploreButtons[title]}</span>
                <ChevronDown className="nav-item-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="nav-container">
      <div className="banner">
        <div className="banner-content">
          <div className="logo-container">
            <div className="logo">
              CRITICAL<span className="logo-slash">\</span>ECOSYSTEM
              <div className="logo-subtitle">PARTNERSHIP FUND</div>
            </div>
          </div>
          <div className="banner-tagline">
            PROTECTING BIODIVERSITY BY SUPPORTING PEOPLE
          </div>
          <button className="apply-button">
            APPLY FOR A GRANT
          </button>
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-content">
          <div className="nav-wrapper">
            <div className="nav-items">
              <NavItem title="Our Work" hasDropdown />
              <NavItem title="Grants" hasDropdown />
              <NavItem title="Impact" hasDropdown />
              <Link to="/path-to-success-stories" className="nav-item">
              <NavItem title="Community" />
              </Link>
              <Link to="/path-to-reports" className="nav-item" >
              <NavItem title="TASK" />
              </Link>
              <NavItem title="Models" hasDropdown/>
              <NavItem title="About" hasDropdown />
            </div>

            <div className="utilities">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Site"
                  className="search-input"
                />
                <Search className="search-icon" />
              </div>
              <button className="translate-button">
                <Globe className="translate-icon" />
                <span>Translate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .nav-container {
  width: 100%;
}

/* Top banner */
.banner {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
}

.banner-content {
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  color: #ef4444;
  font-weight: bold;
  font-size: 1.25rem;
}

.logo-slash {
  color: #ef4444;
}

.logo-subtitle {
  color: #374151;
  font-size: 0.875rem;
  font-weight: normal;
}

.banner-tagline {
  color: #4b5563;
  display: none;
}

@media (min-width: 768px) {
  .banner-tagline {
    display: block;
  }
}

.apply-button {
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;
}

.apply-button:hover {
  background-color: #dc2626;
}

/* Navigation bar */
.nav-bar {
  
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 80rem;
  margin: 0 auto;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: left;
}

.nav-items {
  display: flex;
  background-color: white;
}

/* Nav item */
.nav-item {
  position: relative;
}

.nav-item-content {
  display: flex;
  gap: 0.25rem;
  padding: 1rem 1.5rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-item-content:hover {
 
}

.nav-item-title {
  font-weight: 500;
}

.nav-item-icon {
  height: 1rem;
  width: 1rem;
  transition: transform 0.2s;
}

.nav-item-icon.rotated {
  transform: rotate(180deg);
}

/* Dropdown */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ef4444;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 600px;
  z-index: 50;
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.dropdown-content {
  display: flex;
  justify-content: flex-start; 
  text-align: left; 
}


.dropdown-menu {
  flex: 1;
  border-right: 1px solid rgba(239, 68, 68, 0.6);
  position: relative;
  padding: 1.5rem 0;
}

.menu-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: white;
  opacity: 0.2;
}

.menu-header {
  padding: 0.75rem 2rem;
  color: white;
  font-weight: 600;
}

.menu-item {
  display: block;
  padding: 0.75rem 2rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;
}

.menu-item:hover {
  color:beige;
}

/* Image section */
.image-section {
  width: 20rem;
  padding: 1.5rem;
}

.image-container {
  width: 80%;
  height: 12rem;
  margin-bottom: 1rem;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.explore-button {
  width: 70%;
  background-color: white;
  color:rgb(255, 255, 255);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
background-color:transparent;
}

.explore-button:hover {
 
  text-align:left;
}

/* Utilities section */
.utilities {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
}

.search-container {
  position: relative;
}

.search-input {
  padding: 0.25rem 1rem 0.25rem 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.9);
}

.search-input:focus {
  outline: none;
  border-color: rgba(239, 68, 68, 0.6);
}

.search-icon {
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1rem;
  width: 1rem;
  color: #9ca3af;
}

.translate-button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: white;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.2s;
}

.translate-button:hover {
  color: #fee2e2;
}

.translate-icon {
  height: 1rem;
  width: 1rem;
}
        `}
      </style>
    </div>
  );
};

export default NavHeader;