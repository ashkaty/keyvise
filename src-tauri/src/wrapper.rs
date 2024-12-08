use rdev::{Key};

pub trait KeyToString {
    fn to_lowercase_string(&self) -> String;
}
impl KeyToString for Key{
    fn to_lowercase_string(&self) -> String{
        match self {
            Key::Alt => "alt".to_string(),
            Key::AltGr => "altgr".to_string(),
            Key::Backspace => "backspace".to_string(),
            Key::CapsLock => "capslock".to_string(),
            Key::ControlLeft => "controlleft".to_string(),
            Key::ControlRight => "controlright".to_string(),
            Key::Delete => "delete".to_string(),
            Key::DownArrow => "downarrow".to_string(),
            Key::End => "end".to_string(),
            Key::Escape => "escape".to_string(),
            Key::F1 => "f1".to_string(),
            Key::F10 => "f10".to_string(),
            Key::F11 => "f11".to_string(),
            Key::F12 => "f12".to_string(),
            Key::F2 => "f2".to_string(),
            Key::F3 => "f3".to_string(),
            Key::F4 => "f4".to_string(),
            Key::F5 => "f5".to_string(),
            Key::F6 => "f6".to_string(),
            Key::F7 => "f7".to_string(),
            Key::F8 => "f8".to_string(),
            Key::F9 => "f9".to_string(),
            Key::Home => "home".to_string(),
            Key::LeftArrow => "leftarrow".to_string(),
            Key::MetaLeft => "metaleft".to_string(),
            Key::MetaRight => "metaright".to_string(),
            Key::PageDown => "pagedown".to_string(),
            Key::PageUp => "pageup".to_string(),
            Key::Return => "return".to_string(),
            Key::RightArrow => "rightarrow".to_string(),
            Key::ShiftLeft => "shiftleft".to_string(),
            Key::ShiftRight => "shiftright".to_string(),
            Key::Space => "space".to_string(),
            Key::Tab => "tab".to_string(),
            Key::UpArrow => "uparrow".to_string(),
            Key::PrintScreen => "printscreen".to_string(),
            Key::ScrollLock => "scrolllock".to_string(),
            Key::Pause => "pause".to_string(),
            Key::NumLock => "numlock".to_string(),
            Key::BackQuote => "`".to_string(),
            Key::Num1 => "1".to_string(),
            Key::Num2 => "2".to_string(),
            Key::Num3 => "3".to_string(),
            Key::Num4 => "4".to_string(),
            Key::Num5 => "5".to_string(),
            Key::Num6 => "6".to_string(),
            Key::Num7 => "7".to_string(),
            Key::Num8 => "8".to_string(),
            Key::Num9 => "9".to_string(),
            Key::Num0 => "0".to_string(),
            Key::Minus => "-".to_string(),
            Key::Equal => "=".to_string(),
            Key::KeyQ => "q".to_string(),
            Key::KeyW => "w".to_string(),
            Key::KeyE => "e".to_string(),
            Key::KeyR => "r".to_string(),
            Key::KeyT => "t".to_string(),
            Key::KeyY => "y".to_string(),
            Key::KeyU => "u".to_string(),
            Key::KeyI => "i".to_string(),
            Key::KeyO => "o".to_string(),
            Key::KeyP => "p".to_string(),
            Key::LeftBracket => "[".to_string(),
            Key::RightBracket => "]".to_string(),
            Key::KeyA => "a".to_string(),
            Key::KeyS => "s".to_string(),
            Key::KeyD => "d".to_string(),
            Key::KeyF => "f".to_string(),
            Key::KeyG => "g".to_string(),
            Key::KeyH => "h".to_string(),
            Key::KeyJ => "j".to_string(),
            Key::KeyK => "k".to_string(),
            Key::KeyL => "l".to_string(),
            Key::SemiColon => ";".to_string(),
            Key::Quote => "'".to_string(),
            Key::BackSlash => "\\".to_string(),
            Key::IntlBackslash => "\\".to_string(),
            Key::KeyZ => "z".to_string(),
            Key::KeyX => "x".to_string(),
            Key::KeyC => "c".to_string(),
            Key::KeyV => "v".to_string(),
            Key::KeyB => "b".to_string(),
            Key::KeyN => "n".to_string(),
            Key::KeyM => "m".to_string(),
            Key::Comma => ",".to_string(),
            Key::Dot => ".".to_string(),
            Key::Slash => "/".to_string(),
            Key::Insert => "insert".to_string(),
            Key::KpReturn => "kp_return".to_string(),
            Key::KpMinus => "kp_minus".to_string(),
            Key::KpPlus => "kp_plus".to_string(),
            Key::KpMultiply => "kp_multiply".to_string(),
            Key::KpDivide => "kp_divide".to_string(),
            Key::Kp0 => "kp0".to_string(),
            Key::Kp1 => "kp1".to_string(),
            Key::Kp2 => "kp2".to_string(),
            Key::Kp3 => "kp3".to_string(),
            Key::Kp4 => "kp4".to_string(),
            Key::Kp5 => "kp5".to_string(),
            Key::Kp6 => "kp6".to_string(),
            Key::Kp7 => "kp7".to_string(),
            Key::Kp8 => "kp8".to_string(),
            Key::Kp9 => "kp9".to_string(),
            Key::KpDelete => "kp_delete".to_string(),
            Key::Function => "function".to_string(),
            Key::Unknown(code) => format!("unknown({})", code).to_string(),
        }
    }
}