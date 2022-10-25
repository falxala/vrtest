function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module)
      return;
    if (!gameInstance.logo) {
        gameInstance.logo = document.createElement("div");
        console.log("Try it out");
      //gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
      //gameInstance.container.appendChild(gameInstance.logo);
    }
}