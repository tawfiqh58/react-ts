import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-300">
      <header className="w-full bg-blue-500 p-4">
        <Link to={'/counter'} className="mr-4">
          Counter
        </Link>
        <Link to={'/post'} className="mr-4">
          Post
        </Link>
        <Link to={'/rtk'} className="mr-4">
          RTK APIs
        </Link>
        <hr />
      </header>
      <div className="h-full flex">
        <nav className="h-full w-1/5 bg-gray-200">Sidebar content</nav>
        <main className="flex-grow bg-white p-4">
          <Outlet />
        </main>
      </div>
      <footer className="w-full bg-gray-200 p-4">Footer</footer>
    </div>
  );
};

export default Layout;
