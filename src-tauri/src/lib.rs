use rdev::{Event, listen, EventType};
use std::thread;
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
fn callback(event: Event) {
  
    match event.event_type {
        EventType::KeyPress(key) => println!("Key pressed {:?}", key),
        EventType::KeyRelease(key) => println!("Key released {:?}", key),
        _ => (),
    }
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    thread::spawn(|| listen(callback));
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
