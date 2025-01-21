import React from 'react';
import KeyComponent from './key';



function Keyboard(){
    const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

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
        <div>
            
            {keys.map((key) => {
                return(
                <>
                    <KeyComponent label = {key} isPressed = {pressedKeys.has(key.toUpperCase())} />
                    {console.log(pressedKeys)} 
                </>
            )
            })}

        </div>
    );
}
export default Keyboard;