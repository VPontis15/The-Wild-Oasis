import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://avsjpdsxyxhbmzpmktgo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2c2pwZHN4eXhoYm16cG1rdGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NDE3MzIsImV4cCI6MjAxNTExNzczMn0.8PqOTYI36QT3R9tfjX8u-WG34d_g4OTctktZxGL7ENY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
