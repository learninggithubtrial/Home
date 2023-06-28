const getUserDeviceName = () => {
  const userAgent = navigator.userAgent;

  if (/(android|iphone|ipad)/i.test(userAgent)) {
    // For mobile devices, extract device name from the user-agent string
    const deviceName = userAgent.match(/(android|iphone|ipad)/i)[0];
    return deviceName;
  } else if (/Mac|iPad|iPhone|iPod/.test(navigator.platform)) {
    // For Apple devices, return the platform name
    return "Apple Device";
  } else if (/Windows/.test(navigator.platform)) {
    // For Windows devices, return the platform name
    return "Windows Device";
  } else if (/Linux/.test(navigator.platform)) {
    // For Linux devices, return the platform name
    return "Linux Device";
  }

  return "Unknown Device";
};
