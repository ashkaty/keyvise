import KeySVG from '../assets/key.svg'
import KeyPressedSVG from '../assets/KeyPressed.svg'


function KeyComponent({ label, isPressed }: { label: string, isPressed:Boolean }): JSX.Element {
    
    const containerStyle:React.CSSProperties = 
    {
        position:'relative',
        display: 'inline-block'
    }

    const textStyle: React.CSSProperties =
    {
        position: 'absolute',
        color:'#000000',
        fontSize: '20px',
        bottom: '0%',
        left: '36%',
    }
    return (
        <div style={containerStyle}>
            {isPressed ? 
                <img src={KeyPressedSVG} width={50} height={50}/> :
                <img src={KeySVG} width={50} height={50}/> 
            }
            <p style={textStyle}>{label}</p>
        </div>
        
    );
  }

export default KeyComponent;