import { useEffect,useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false)
  
  useEffect(() => {
   console.log("effect", {enabled})
  },[enabled])


  return (
    <>
      <main>
        <div style={{
          position: "absolute",
          background: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: "50%",
          top: "50%",
          width: 40,
          height:40,
          transform: "translate(0px, 0px)"
        }}></div>
         <button onClick={() => setEnabled(!enabled)} >
        {enabled? "activar" : "desactivar"} seguir puntero
        </button>
      </main>
    </>
  );
    
}

export default App;