import KeySVG from '../assets/key.svg'



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
            <img src={KeySVG} width={50} height={50}/>
            <p style={textStyle}>A</p>
        </div>
        
    );
  }

export default KeyComponent;