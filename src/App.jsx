import { useState } from "react";
import "./App.css";


export default function App() {
  const [flipped, setFlipped] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const handleFlip = () => {
    setFlipped(!flipped);
  };


  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };


  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  return (
    <div style={styles.page}>
      {/* 海灘漂浮元素 */}
      <div style={styles.shell1}>🐚</div>
      <div style={styles.shell2}>🪸</div>
      <div style={styles.shell3}>🫧</div>
      <div style={styles.shell4}>🐠</div>
      <div style={styles.shell5}>⭐</div>


      {/* 主內容區域 */}
      <div style={styles.mainContent}>
        {/* 名片容器 */}
        <div style={styles.container}>
          <div
            style={{
              ...styles.card,
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            onClick={handleFlip}
          >
            {/* 正面 */}
            <div style={{ ...styles.face, ...styles.front }}>
              <img src="/finn.jpg" alt="avatar" style={styles.avatar} />
              <h2>方虹絜</h2>
              <p>資工系三甲</p>
              <p>5b2g0016</p>
              <p style={styles.tip}>點一下卡片翻面</p>
            </div>


            {/* 背面 */}
            <div style={{ ...styles.face, ...styles.back }}>
              <h2>About Me</h2>
              <p>我正在學習 React，這是一個翻轉卡片作品。</p>
              <p>Email: 5b2g0016@stust.edu.tw</p>
              <p style={styles.tip}>再點一次回正面</p>
            </div>
          </div>
        </div>


        {/* 分隔線 */}
        <div style={styles.divider}></div>


        {/* TodoList 容器 */}
        <div style={styles.todoContainer}>
          <h2 style={styles.todoTitle}>🌴My Todo List</h2>
          <div style={styles.inputArea}>
            <input
              type="text"
              placeholder="今天要完成什麼..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              style={styles.input}
            />
            <button onClick={addTodo} style={styles.button}>
              新增
            </button>
          </div>


          <ul style={styles.list}>
            {todos.map((item, index) => (
              <li key={index} style={styles.listItem}>
                {item}
                <button
                  onClick={() => deleteTodo(index)}
                  style={styles.deleteBtn}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw", // 確保寬度佔滿視窗
    margin: 0,      // 消除外邊距
    background: "linear-gradient(to bottom, #6dd5fa 0%, #bdefff 45%, #ffe7a3 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",    
    position: "relative",
    fontFamily: "sans-serif",
    padding: "20px",
    boxSizing: "border-box", // 確保 padding 不會撐破寬度
    overflowX: "hidden",     // 防止左右滑動
  },


  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    width: "100%",           // 內容寬度撐開
    zIndex: 2,
  },


  container: {
    perspective: "1200px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },


  card: {
    width: "320px",
    height: "400px",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s",
    cursor: "pointer",
    boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
    borderRadius: "24px",
  },


  face: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    background: "rgba(255,255,255,0.45)",
    backdropFilter: "blur(10px)",
    boxSizing: "border-box",
  },


  front: {},


  back: {
    transform: "rotateY(180deg)",
    background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
    color: "white",
  },


  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid white",
    marginBottom: "20px",
  },


  tip: {
    marginTop: "15px",
    fontSize: "13px",
    opacity: 0.8,
  },


  divider: {
    width: "320px",
    height: "4px",
    background: "linear-gradient(to right,#ffffff,#38bdf8,#ffffff)",
    borderRadius: "999px",
    margin: "10px 0",
  },


  todoContainer: {
    width: "100%",
    maxWidth: "350px",
    padding: "30px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    boxSizing: "border-box",
  },


  todoTitle: {
    textAlign: "center",
    marginBottom: "20px",
    marginTop: 0,
  },


  inputArea: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },


  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "14px",
  },


  button: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg,#0ea5e9,#38bdf8)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },


  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },


  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.8)",
  },


  deleteBtn: {
    border: "none",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },


  shell1: { position: "absolute", top: "10%", left: "10%", fontSize: "50px" },
  shell2: { position: "absolute", bottom: "15%", right: "10%", fontSize: "60px" },
  shell3: { position: "absolute", top: "25%", right: "20%", fontSize: "40px" },
  shell4: { position: "absolute", bottom: "20%", left: "15%", fontSize: "45px" },
  shell5: { position: "absolute", top: "18%", left: "45%", fontSize: "35px" },
};
