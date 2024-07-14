use dotenv::dotenv;
use std::env;
//use tauri::Manager;

#[tauri::command]
pub fn get_supabase_config() -> Result<(String, String), String> {
    println!("get_supabase_config");
    dotenv().ok();
    let supabase_url = env::var("NEXT_PUBLIC_SUPABASE_URL").map_err(|e| e.to_string())?;
    let supabase_key = env::var("NEXT_PUBLIC_SUPABASE_ANON_KEY").map_err(|e| e.to_string())?;
    Ok((supabase_url, supabase_key))
}
