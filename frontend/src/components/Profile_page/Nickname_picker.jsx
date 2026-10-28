import { useState, useEffect } from "react";
import "../../css/Profile.css";

function Nickname_picker() {
  const [nickname, setNickname] = useState(""); 
  const [prevNickname, setPrevNickname] = useState(""); 
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => { const load = async () => { try { const token = localStorage.getItem("token"); if (!token) { const local = localStorage.getItem("username") || ""; setNickname(local); setPrevNickname(local); return; } const res = await fetch("http://localhost:5000/api/auth/me", { headers:{ Authorization:`Bearer ${token}` } }); if (!res.ok) throw new Error("me failed"); const data = await res.json(); const name = data.username || data.nickname || ""; setNickname(name); setPrevNickname(name); if (name) localStorage.setItem("username", name); } catch (e) { const local = localStorage.getItem("username") || ""; setNickname(local); setPrevNickname(local); } finally { setLoading(false); } }; load(); }, []);

  const saveNick = async () => {
    const value = nickname.trim(); if (!value) { setNickname(prevNickname); setIsEditing(false); return; }
    setIsEditing(false);
    try {
      const token = localStorage.getItem("token"); if (!token) { localStorage.setItem("username", value); setPrevNickname(value); return; }
      const first = await fetch("http://localhost:5000/api/auth/update-nickname", { method:"PUT", headers:{ "Content-Type":"application/json", Authorization:`Bearer ${token}` }, body: JSON.stringify({ nickname:value }) });
      if (first.ok) { const d = await first.json(); const name = d.username || d.nickname || value; setNickname(name); setPrevNickname(name); localStorage.setItem("username", name); return; }
      const second = await fetch("http://localhost:5000/api/auth/update", { method:"PUT", headers:{ "Content-Type":"application/json", Authorization:`Bearer ${token}` }, body: JSON.stringify({ username:value }) });
      if (!second.ok) throw new Error("update failed"); const d2 = await second.json(); const name2 = d2.username || d2.nickname || value; setNickname(name2); setPrevNickname(name2); localStorage.setItem("username", name2);
    } catch (e) { setNickname(prevNickname); }
  };

  return (
    <div id="nicknamein">
      {loading ? <span className="nickname-text" style={{ cursor:"default" }}>Загрузка...</span> : isEditing ? (
        <input type="text" className="nickname-input" value={nickname} onChange={(e) => setNickname(e.target.value)} onBlur={saveNick} onKeyDown={(e) => e.key === "Enter" && saveNick()} autoFocus/>
      ) : (
        <span className="nickname-text" onDoubleClick={() => setIsEditing(true)} style={{ cursor:"pointer", transition:"filter 0.25s ease, color 0.25s ease" }} onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.85)")} onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}>{nickname || "Без ника"}</span>
      )}
    </div>
  );
}

export default Nickname_picker;
