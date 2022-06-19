const production = true;

module.exports = {
  env: production ? {
    SOCKET_URL: "https://18.228.212.106:442"
  } : {
    SOCKET_URL: "http://192.168.100.6:4000"
  }
}