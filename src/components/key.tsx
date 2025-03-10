import '../App.css'

function KeyComponent({ label, isPressed, size = 0}: { label: string, isPressed:Boolean, size: Number}): JSX.Element {
    
    const containerStyle: React.CSSProperties = 
    {
        position:'relative',
        display: 'inline-block',
    }

    const textStyle: React.CSSProperties =
    {
        position: 'absolute',
        color:'white',
        fontSize: '20px',
        bottom: '0%',
        left: '36%',
    }

    const keyClass = (isPressed:Boolean, size:Number) => {
        if (size == 0){
            if (isPressed) {
                return <div className='smallKeyPressed'/> 
            }
            else {
                return <div className = 'smallKey'/>
            }
        }

        else if (size == 1){
            if (isPressed) {
                return <div className='mediumKeyPressed'/> 
            }
            else {
                return <div className = 'mediumKey'/>
            }
        }
        else if (size == 2){
            if (isPressed) {
                return <div className='smallKeyPressed'/> 
            }
            else {
                return <div className = 'smallKey'/>
            }
        }
        else if (size == 3){
            if (isPressed) {
                return <div className='smallKeyPressed'/> 
            }
            else {
                return <div className = 'smallKey'/>
            }
        }
        else {
            if (isPressed) {
                return <div className='smallKeyPressed'/> 
            }
            else {
                return <div className = 'smallKey'/>
            }
        }
    }

    return (
        <div style={containerStyle}>
            {keyClass(isPressed, size)}
            <p style={textStyle}>{label}</p>
        </div>
        
    );
  }

export default KeyComponent;