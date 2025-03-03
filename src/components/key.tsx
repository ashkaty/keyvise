import '../App.css'

function KeyComponent({ label, isPressed, size = 1}: { label: string, isPressed:Boolean, size: Number}): JSX.Element {
    
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


    return (
        <div style={containerStyle}>
            { size == 0 &&
                isPressed ? 
                    <div className='smallKeyPressed'/> :
                    <div className = 'smallKey'/> 
                
            }

            { size != 0 &&
                isPressed ? 
                    <div className='mediumKeyPressed'/> :
                    <div className = 'mediumKey'/> 
                
            }
            <p style={textStyle}>{label}</p>
        </div>
        
    );
  }

export default KeyComponent;