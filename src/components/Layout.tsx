import React from 'react';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      {/* side and navbar */}
      <body>
        <Outlet />
      </body>
      {/* footer */}
    </div>
  );
}
