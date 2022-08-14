// REACT - STYLING (SASS, BOOTSTRAP INTRO)

// "buton.module.css"

.btn-blue {
    cursor: pointer;
    background-color: #0069d9;
    border-radius: 5px;
    
  }
  .title {
    text-align: center;
  }

// "buton.component.jsx"

import btnStyle from "./buton.module.css";
// Buradaki btnStyle rastgele bir isimdir. Bu yöntemle bu artik obje haline gelmis oldu.
// Dolayisiyla jsx bölgesinde class'landirma yaparken de ona göre cagri yapariz.

//* ORN:moduleName["class-adi"]

const Buton = ({ btnName }) => {
  return (
    <div className={btnStyle["title"]}>
      <button className={btnStyle["btn-blue"]}>{btnName}</button>
    </div>
  );
};

export default Buton;
