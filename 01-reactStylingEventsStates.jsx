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
 /* <div className={btnStyle.title}> */
      <button className={btnStyle["btn-blue"]}>{btnName}</button>
    </div>
  );
};

export default Buton;

//
//
//
//
//
//
//
//
//
//
// REACT - EVENTS

const Button = () => {

  const handleClick = (text) => {
    alert(text);
  };

  const handleEvent = (e) => {
    console.log(e.target);
  };

  // Eventleri bu sekilde parametrik yapabiliriz.
  // Asagida handleCLick fonksiyonunu arrow function icinde yazdik, cünkü fonksiyonumuzun sayfa yüklenir yüklenmez tetiklenmesini istemiyoruz.
  // event fonksiyonlarda, bir parametre sözkonusuysa bu sekilde yapilmak zorunda!

  return (
    <div>
      <button onClick={()=>{handleClick("Merhaba")}}> Click </button>
    </div>
  );

  return (
    <div>
      <button onClick={(e)=>handleEvent(e)}> Click </button>
    </div>
  );
};

//
//
//
//
//
//
//
//
//
//
// REACT - STATES

const UseStateExample = () => {

  const [info, setInfo] = useState({
    name: 'Ahmet Yilmaz',
    email: 'ay@gmail.com',
    age: 32,
  });

  const incAge = () => {
    setInfo({ ...info, age: info.age + 1 });
  };

// Bir objenin icindeki bir property'i degistirmek istiyorsak yukaridaki gibi yapariz.
// Objeyi spread operatörüyle önce acariz, sonra degistirmek istedigimiz yeri ve degisikligi nokta atisiyla belirtiriz.

  return (
    <button onClick={incAge} className="btn btn-info">
      Yasi Arttir
    </button>
  );

}

//
//
//
//
//
//
//
//
//
//
// KEYBOARD - CLIPBOARD EVENTS

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState(''); 

  const handleAreaPaste = (e) => {
    e.target.value += e.clipboardData.getData('text').toLowerCase();
    // e'nin, yani eventin icinde clipboardData diye bir özellik vardir.
    // bunun getData metodu, veriyi text olarak ceker.
    // yani ctrl c ya da ctrl x ile alinmis olan bir veriyi okumamiza yarar.
    // burada ctrl c ya da x ile alinmis olan veriyi, hafiza icinde, kücük harfe cevirdik ve textarea'nin value'suna ekledik.

    e.target.style.border = '3px solid red';
    e.target.style.backgroundColor = 'lightgreen';
    e.preventDefault();
  };

  const handleAreaChange = (e) => {
    if (!e.target.value) {
      e.target.style.border = '1px solid black';
      e.target.style.backgroundColor = 'transparent';
    }
  };

  return (
      <textarea
        name="area"
        id="area"
        cols="50"
        rows="10"
        onPaste={handleAreaPaste}
        onChange={handleAreaChange}
    ></textarea>
    );
};

