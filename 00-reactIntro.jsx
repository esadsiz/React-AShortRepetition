const selam = <h1> Merhaba Enes! </h1>;
/* bu DOM'a degisken adinin cagrilmasiyla basilabilir. */

npx create-react-app appismi /* proje olusturma komutu */
npm install /* projeyi ayaga kaldirir. */
##################################################
#
#
#
#
#
##################################################
/* Burasi content.component.jsx bölgesi */
/* component böyle olusturulur. */

import "./Content.css";

const Content = () => {
  
  const imgStyle = {
    display: "block",
    width: "300px",
    margin: "1rem auto",
  };
  
  return (
    <div className="content">
      <h2 style={{ backgroundColor: "red" }}>React JS</h2>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="img1"
      />
      <footer> Copyright by Clarusway, {new Date().getFullYear()}, {3+5} </footer>
    </div>
  );

};

export default Content;
##################################################
#
#
#
#
#
##################################################
/* Burasi content.component.jsx bölgesi */
/* component böyle olusturulur. */

const Person = ({ name, img, tel } /*{personProps}*/) => {
// const Person = (props) => { const { name, img, tel } = props;
  // const { name, img, tel } = personProps;
  return (
    <div>
      <h1> Merhaba {name} </h1>
      <img src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
##################################################
#
#
#
#
#
##################################################
/* Burasi App.js bölgesi */
/* component böyle cagirilir. */

import Content from "./Content";

function App() { 
  /* const personPropsObj = {
                name : "Canan Bayram",
                img : "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
                tel : "5555 555555"
           } */
  return (
    <div>
      <Content />
      <Person
        name="Canan Bayram"
        img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        tel="5555 555555"
        /* personProps = { personPropsObj } */
      />
    </div>
  );
}

export default App;
##################################################
