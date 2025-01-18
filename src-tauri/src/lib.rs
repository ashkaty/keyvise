pub mod wrapper;

use rdev::{Event, listen, EventType, Key};
use std::thread;
use tauri::{Emitter, AppHandle};
use crate::wrapper::KeyToString;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


fn callback(event: Event, app_handle: AppHandle) {
    match event.event_type {
        EventType::KeyPress(key) => app_handle.emit("keyPressed", key.to_lowercase_string()).unwrap(),
        EventType::KeyRelease(key) => app_handle.emit("keyReleased", key.to_lowercase_string()).unwrap(),
        _ => (),
    }
}

#[tauri::command]
fn test(app_handle: AppHandle){
    app_handle.emit("keyPressed", "test payload").unwrap()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // thread::spawn(|| listen(callback));
    tauri::Builder::default()
        .setup(move |app| {
            let app_handle = app.handle().clone();
            thread::spawn(move || {
                listen(move |event| {
                    callback(event, app_handle.clone());
                })
            });
            Ok(())
          })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, test])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
