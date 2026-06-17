import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoBox from '../../components/PhotoBox/PhotoBox';
import Button from '../../components/Button/Button';
import { USER } from '../../data';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <div className="home-page__overlay" />
      <div className="home-page__content">
        <PhotoBox
          name={USER.name}
          title={USER.title}
          description={USER.description}
          avatar={USER.avatar}
        />
        <Button text="Know more" onClick={() => navigate('/inner/about')} />
      </div>
    </main>
  );
};

export default Home;
