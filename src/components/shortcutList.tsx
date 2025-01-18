import {useState, useEffect} from "react"
import {listen} from '@tauri-apps/api/event'; 
import { event } from "@tauri-apps/api";
function ShortCutList(): JSX.Element {
    type ShortCut = {
        name : string
        keys : string[]
        description : string
    }
    
    const shortCutList:ShortCut[] = [{"name": "Task Manager","keys": ["control", "alt", "delete"], "description" : ""}, {"name" : "Select All", "keys" : ["control", "a"], "description" : ""}, {"name" : "Open Quick Settings", "keys" : ["meta", "a"], "description" : ""}, {"name": "Open File Explorer", "keys" : ["meta", "e"], "description" : ""}, {"name": "Cycle Through Windows", "keys" : ["alt", "esc"], "description": ""}]

    const [filteredList, setFilteredList] = useState<ShortCut[]>([])
    const [keysPressed, setKeysPressed] = useState<Set<string>>(new Set())
    
    
    useEffect(() => {
        
        listen('keyPressed', (event:any) => {
            setKeysPressed(prevKeys => {
                const updatedKeys = new Set(prevKeys)
                updatedKeys.add(event.payload)
                // console.log(updatedKeys)
                return (updatedKeys)
            })
          });
    
    
        listen('keyReleased', (event:any) => {
        setKeysPressed(prevKeys => {
            const updatedKeys = new Set(prevKeys)
            updatedKeys.delete(event.payload)
            // console.log(updatedKeys)
            return (updatedKeys)
        })
        });
  
       
       

        return () =>{

        }
    }, [keysPressed]);
    
    useEffect(() => {
        window.addEventListener('keydown', handleOnKeyDown);
        window.addEventListener('keyup', handleOnKeyUp)

        return () => {
            window.removeEventListener('keydown', handleOnKeyDown)
            window.removeEventListener('keyup', handleOnKeyUp)
        };
        
    }, [])



    useEffect(() => {
        console.log(filteredList)
        setFilteredList(shortCutList.filter((shortcut) => hasInvalidKey(shortcut)))
    }, [keysPressed])

    const handleOnKeyDown = (event:KeyboardEvent) => {
        setKeysPressed((prevKeys) => {
            const updatedKeys = new Set(prevKeys)
            console.log(event.key)
            updatedKeys.add(event.key.toLowerCase())
            return updatedKeys
        })
    }

    const handleOnKeyUp = (event:KeyboardEvent) => {
        setKeysPressed((prevKeys) => {
            const updatedKeys = new Set(prevKeys)
            updatedKeys.delete(event.key.toLowerCase())
            return updatedKeys
        })
    }

    const hasInvalidKey = (shortcut:ShortCut) => {
        const keyPressedArray = Array.from(keysPressed)
            for (let i = 0; i < keyPressedArray.length; i++){
                if (!shortcut.keys.includes(keyPressedArray[i]))
                    return false
            }
        return true
    }
    
   
    return (
        <div>
        {(keysPressed.size > 0 ? filteredList : shortCutList).map(
          (shortcut, index) => (
            <div
              key={index}
              className="p-2 border rounded-lg bg-white shadow-sm"
            >
              <div className="font-medium">{shortcut.name}</div>
              <div className="text-sm text-gray-600">
                Keys: {shortcut.keys.join(" + ")}
              </div>
            </div>
          )
        )}
        </div>
    )
}

    

export default ShortCutList