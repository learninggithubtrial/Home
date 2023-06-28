const getUserBrowserDetails = () => {
    const { userAgent } = navigator;
    const browserName = getBrowserName(userAgent);
    const browserVersion = getBrowserVersion(userAgent);
  
    return {
      browserName,
      browserVersion,
      userAgent,
    };
  };
  
  const getBrowserName = (userAgent) => {
    const userAgentLowerCase = userAgent.toLowerCase();
    if (userAgentLowerCase.includes('firefox')) {
      return 'Firefox';
    } else if (userAgentLowerCase.includes('chrome')) {
      return 'Chrome';
    } else if (userAgentLowerCase.includes('safari')) {
      return 'Safari';
    } else if (userAgentLowerCase.includes('opera') || userAgentLowerCase.includes('opr')) {
      return 'Opera';
    } else if (userAgentLowerCase.includes('edge')) {
      return 'Microsoft Edge';
    } else if (userAgentLowerCase.includes('msie') || userAgentLowerCase.includes('trident')) {
      return 'Internet Explorer';
    } else {
      return 'Unknown Browser';
    }
  };
  
  const getBrowserVersion = (userAgent) => {
    const matches = userAgent.match(/(firefox|chrome|safari|opr|opera|edge|msie|trident(?=\/))\/?\s*([\d\.]+)/i);
    return matches && matches[2] ? matches[2] : 'Unknown Version';
  };
  
  // Usage
  const browserDetails = getUserBrowserDetails();
  console.log('Browser Name:', browserDetails.browserName);
  console.log('Browser Version:', browserDetails.browserVersion);
  console.log('User Agent:', browserDetails.userAgent);
  