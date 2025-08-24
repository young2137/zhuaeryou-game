// Firebase配置文件
// 你需要去 https://console.firebase.google.com/ 创建项目并获取这些配置

const firebaseConfig = {
  apiKey: "你的API密钥",
  authDomain: "你的项目.firebaseapp.com",
  databaseURL: "https://你的项目-default-rtdb.firebaseio.com",
  projectId: "你的项目ID",
  storageBucket: "你的项目.appspot.com",
  messagingSenderId: "你的发送者ID",
  appId: "你的应用ID"
};

// 使用说明：
// 1. 访问 https://console.firebase.google.com/
// 2. 创建新项目
// 3. 在项目设置中找到配置信息
// 4. 复制上面的配置并替换相应值
// 5. 在Firebase控制台中启用Realtime Database
// 6. 设置数据库规则为测试模式（允许读写）

export default firebaseConfig;
