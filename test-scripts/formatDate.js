

let getCurrentTimeHongKong = () => {
    // Create a new Date object
    const date = new Date();
  
    // Get the UTC time offset for Hong Kong (UTC+8)
    const hongKongOffset = 8 * 60; // in minutes
  
    // Calculate the local time in Hong Kong
    const hongKongTime = new Date(date.getTime() + hongKongOffset * 60 * 1000);
  
    // Extract the individual components of the time
    const year = hongKongTime.getFullYear();
    const month = String(hongKongTime.getMonth() + 1).padStart(2, '0');
    const day = String(hongKongTime.getDate()).padStart(2, '0');
    const hours = String(hongKongTime.getHours()).padStart(2, '0');
    const minutes = String(hongKongTime.getMinutes()).padStart(2, '0');
    const seconds = String(hongKongTime.getSeconds()).padStart(2, '0');
  
    // Format the time string
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    return formattedTime;
}
  
  // Usage example:
  const currentTimeHK = getCurrentTimeHongKong();
  console.log(currentTimeHK);