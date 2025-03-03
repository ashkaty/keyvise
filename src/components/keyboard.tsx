import React from 'react';
import KeyComponent from './key';



function Keyboard(){
  const firstRowKeys = ["`", "1", "2", "3", "4", "5", "6", "7", "8","9", "0", "-", "=", "Back"]
  const secondRowKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', "[", "]", "\\"];
  const thirdRowKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ";", "'"]
  const fourthRowKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ",", ".", "?"]

  const [pressedKeys, setPressedKeys] = React.useState<Set<String>>(new Set());

  React.useEffect(() => {

  
  
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    }, [pressedKeys]);

    const handleKeyDown = (e:KeyboardEvent) => {
      const pressedKey = e.key.toUpperCase();
      //need to create a new Set because React detects state changes only if the reference changes. It does a shallow comparison 
      const newPressedKeys = new Set(pressedKeys)
      newPressedKeys.add(pressedKey)
      setPressedKeys(newPressedKeys);
    };

    
    const handleKeyUp = (e:KeyboardEvent) => {
      //need to create a new Set because React detects state changes only if the reference changes. It does a shallow comparison 
      const newPressedKeys = new Set(pressedKeys)
      newPressedKeys.delete(e.key.toUpperCase())
      setPressedKeys(newPressedKeys)
    };

  return (
    <div className="keyboard">
    {[firstRowKeys, secondRowKeys, thirdRowKeys, fourthRowKeys].map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((key) => (
          <KeyComponent key={key} label={key} isPressed={pressedKeys.has(key.toUpperCase())} />
        ))}
      </div>
    ))}
  </div>
  );
}
export default Keyboard;