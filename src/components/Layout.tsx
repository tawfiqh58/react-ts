import React from 'react';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      {/* side and navbar */}
      <div>
        <Outlet />
      </div>
      {/* footer */}
    </div>
  );
}
