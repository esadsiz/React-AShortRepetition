// 1. STUDENTCONTEXT.JSX #####

import { createContext } from "react";

//? Context olusturuldu
export const StudentContext = createContext();

// APP.JS #####

import { useState } from "react";
import StudentList from "./components/StudentList";
import { StudentContext } from "./context/StudentContext";
import data from "./data";

function App() {
  const [students, setStudents] = useState(data);

  const changeColor = (id, color) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, color: color } : student
      )
    );
  };
  return (
    <div>
      {/* <StudentList students={students} /> */}
      {/* <StudentContext.Provider value={{ students, setStudents }}> */}
      <StudentContext.Provider value={{ students, changeColor }}>
        <StudentList />{" "}
        {/* Artik bu StudentList komponenti, StudentContext icindeki value'lara erisebilir. */}
      </StudentContext.Provider>
    </div>
  );
}
export default App;

// STUDENTLIST.JSX #####

import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  //! Context'ten students verisini okuduk.
  const { students } = useContext(StudentContext);

  return (
    <div>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;


// ##################################################
// ##################################################
// ##################################################

// USERCONTEXTPROVIDER.JSX

import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

//? 1- Defining
export const UserContext = createContext();

//? 2- Provider Component
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    ...
  }, []);

  const changeWidth = (id, width) => {
    setUsers(
      ...
    );
  };
  const values = { users, changeWidth };

  return <UserContext.Provider value={values}>{children} {/* ileride neyi sarmalayacaksak,
       o, bu children'in yerine gecer. Semboliktir yani.*/} </UserContext.Provider>;
};

export default UserContextProvider;

// USER.JSX

const User = ({ user }) => {
    const { id, login, avatar_url, width } = user;
  
    const { changeWidth } = useContext(UserContext);
    return (
      <div>
        ...
          <input
            id="width"
            type="number"
            value={width}
            onChange={(e) => changeWidth(id, e.target.value)}
          />
        ...
      </div>
    );
  };
  
  export default User;
  

  // APP.JS

import UserContextProvider from './context/UserContextProvider';
import ShowUsers from './pages/ShowUsers';

function App() {
  return (
    <>
      <UserContextProvider>
        <ShowUsers />
      </UserContextProvider>
    </>
  );
}
export default App;
