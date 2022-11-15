###########################################################################
/* burasi App.js bölgesi */

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        {/*her sayfada görünmesi gereken componentleri Routes'in disina aliriz.
          "yukaridan Nav gelsin, asagidan Footer gelsin. ortaya da "Routes" icindeki sayfalardan biri." */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="*" element={<NotFound />} />
          {/* "*" bunlarin disindaki herhangi bir sayfa demek */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
###########################################################################
#
#
#
#
#
###########################################################################
/* burasi NavBar.jsx bölgesi */

import { Link, NavLink } from "react-router-dom";
// Nav'da React Router'in Link componenti yerine a kullanirsak, sayfalar yavas gelir.
// bastan bir render etme sözkonusu olur. o yüzden Link componentini kullaniyoruz.

const NavBar = () => {
  return (
    <div>
      <Link to="/">HomeLinki</Link>
    {/* NavLink, stillendirme icin kullanilir. style ile "eger isActive true ise rengi kirmizi yap."*/}
      <NavLink
        style={({ isActive }) => (return { color: isActive && "red", isActive && margin: '10px })}
        to="/instructors"
        className="nav-link active"
        aria-current="page">
          Home
      </NavLink>
    </div>
  );
};

export default Nav;
###########################################################################
#
#
#
#
#
###########################################################################

// PAGES

import Instructors from "./pages/Instructors";
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstructorDetail from "./pages/InstructorDetail";
import { Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="instructors/:id" element={<InstructorDetail />} />
        {/* Bunun bu :id seklindeki yazimi kafani karistirmasin, syntax bu sekilde. */}

        {/* Nested Route */}
        <Route path="paths" element={<Paths />}>
        {/* Normalde "paths"e gittimizde bu iki komponentin karsimiza cikmasini bekleriz. Ama cikmaz. Bunun icin Outlet kullaniriz.
            Outlet, nested yapilarda main komponentin en üst divinin kapanis kismina eklenir. (<Outlet /> seklinde. Bu Outlet alttaki iki route'u temsil eder.)
            Hangisinin linkine tiklarsak onu getirir. default olarak fullstack pathi acilsin istersek de fullstack'i cogaltir, birine alt satirdaki gibi index yazariz.*/}
          <Route index element={<FullStack />} /> 
          <Route path="fullstack" element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>

         {/* Public olmayan sayfalar icin yapi budur. birisi contact'a girmek isterse, önce PrivateRouter'dan gecirir. PrivateRouter'da duruma göre gecise gecise izin verir,
         false ise yazili path'e atar. Nerede yazili pathe? PrivateRouter'in icindeki path'e. */}
        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        {/*
          <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

//
//
//
//
//
// ####################################################
// PAGES / INSTRUCTORS

import { useNavigate } from "react-router-dom";

const Instructors = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {instructors?.map((inst) => {
          return (
            <div
              key={id}
              onClick={() => navigate(`/instructors/${id}`)}
              // instructors sayfasinin icindeki id degiskeninin path'ine git.
              // "linkteki" bu id'yi yakalamak icin useParams hook'u kullanilir.
              //! Relative path
              onClick={() => navigate(`${id}`, { state: inst })}
              // bu tarz dinamik linkler olustururken beraberinde veri de gönderebiliyoruz.
              // gönderdigimiz bilgiyi de useLocation hook'uyla ilgili yerde yakalayabiliyoruz.
              // ancak burasi sonra.
              //? Absolute path
              onClick={() => navigate(`/instructors/${id}`, { state: inst })}
              // instructor bilgisini bu sekilde prop ile gönderirsek, hedef id linkine instructors sayfasi disindan bi yerden ulasamayiz.
              style={{ cursor: "pointer" }}
            >
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${inst.id}.svg`}
                alt=""
              />
              <h6>{inst.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//
//
//
//
//
// ####################################################
// PAGES / INSTRUCTORS / ID (INSTRUCTOR DETAIL)

import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const InstructorDetail = () => {
  // linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();

  // ya da veriler ayri bir parametre ile gönderilmis ise öteki yöntem;
  const { inst } = useLocation;

  ...

    return (
      <div className="container text-center">
        <h3>{inst.name}</h3>
        <img
          className="w-50"
          src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
          alt=""
        />
      </div>
    );
  }
};

export default InstructorDetail;

//
//
//
//
//
// ####################################################
// NAVBAR

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};


import { Link, NavLink } from "react-router-dom";

<ul>
  <li>
    <NavLink style={({ isActive }) => ({ color: isActive && "red" })} to="/">
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      style={({ isActive }) => ({ color: isActive && "red" })}
      to="/paths"
    >
      Paths
    </NavLink>
  </li>
  <li>
    <NavLink
      style={({ isActive }) => ({ color: isActive && "red" })}
      to="/contact"
    >
      Contact
    </NavLink>
  </li>

  <div>
  <button onClick={() => navigate(-1)}>Go Back</button>
</div>

</ul>;


export default Nav;

//
//
//
//
//
// ####################################################
// PRIVATE ROUTER



import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  //? Aslinda bu bilgi ilerde Global state'den okunacak
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
z
export default PrivateRouter;
