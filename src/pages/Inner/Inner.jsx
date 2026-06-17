import React from 'react';
import { Outlet } from 'react-router-dom';
import Panel from '../../components/Panel/Panel';
import './Inner.scss';

const Inner = () => (
  <div className="inner-layout">
    <Panel />
    <main className="inner-layout__content">
      <Outlet />
    </main>
  </div>
);

export default Inner;
