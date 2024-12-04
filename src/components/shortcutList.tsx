import {useState, useEffect} from "react"

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
        
        const handleOnKeyDown = (event) =>  {
            setKeysPressed(prevKeys => {
                const updatedKeys = new Set(prevKeys)
                updatedKeys.add(event.key.toLowerCase())
                console.log(updatedKeys)
                return (updatedKeys)
            })
            
        }

        const filterList = () => {
            
            const updatedList = shortCutList.filter((shortcut) => {
                const hasInvalidKey = Array.from(keysPressed).some((pressedKey) => !shortcut.keys.includes(pressedKey));
                return !hasInvalidKey;
            })
            console.log("Filtered List: ", updatedList)

           
            return updatedList
        }
        setFilteredList(() => {
            const updatedList = filterList() 
            return updatedList
        })
        document.addEventListener('keydown', handleOnKeyDown);
       
        document.addEventListener('keyup', handleOnKeyUp);
        

        return () =>{
            document.removeEventListener('keydown', handleOnKeyDown);
            document.removeEventListener('keyup', handleOnKeyUp);
        }
    }, [keysPressed]);
    
    
    const handleOnKeyUp = (event:any) =>  {
        setKeysPressed(prevKeys => {
            const updatedKeys = new Set(prevKeys)
            updatedKeys.delete(event.key.toLowerCase())
            console.log(updatedKeys)
            return (updatedKeys)
        })
        
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