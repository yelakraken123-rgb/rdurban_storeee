import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://lbimfzfxpdvfircdcovf.supabase.co";
const supabaseAnonKey = "sb_publishable_-LQTfowF0TMzIfBiXYH28A_uNFoZMn-";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});