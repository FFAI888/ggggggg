const connectButton = document.getElementById("connectWallet");
const statusText = document.getElementById("status");

connectButton.addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      statusText.textContent = "钱包已连接: " + accounts[0];
      // 登录成功后 1 秒跳转
      setTimeout(() => {
        window.location.href = "confirm.html";
      }, 1000);
    } catch (err) {
      statusText.textContent = "连接失败: " + err.message;
    }
  } else {
    statusText.textContent = "未检测到钱包，请安装 MetaMask";
  }
});
