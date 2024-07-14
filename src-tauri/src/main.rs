// Prevents additional console window on Windows in release, DO NOT REMOVE!!
//#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

//use std::process::Command;
mod commands {
    pub mod get_supabase_config;
}

use commands::get_supabase_config::get_supabase_config;

fn main() {
    println!("Hello, world!");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_supabase_config])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
