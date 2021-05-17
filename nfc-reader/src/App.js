function App() {
  return (
    <button style={{width:"100%", height:"100px", "font-size":"25px"}} onClick={readNFC}>SCAN</button>
  );
}

const readNFC = async () =>
{
  if ('NDEFReader' in window) {
    try {
      // eslint-disable-next-line no-undef
      const ndef = new NDEFReader();
      await ndef.scan();
      alert("Scan started successfully.");
      ndef.onreadingerror = (event) => {
        console.log(event);
        alert(`Unsupported NFC tag.`);
      };
      ndef.onreading = event => {
        console.log(event)
        alert(`NDEF message read. Serial number: ${event.serialNumber}`);
      };
    } catch (error) {
      alert(`Error! Scan failed to start: ${error}.`);
    }
  } else {
    alert("No reader found. Ensure you have NFC activated. Visit https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API#browser_compatibility for compatibility info");
  }
}

export default App;
