const dataAPI = async(API) => {
      const urlData = await fetch(API);
      const data = await urlData.json();
      return data
}

export default dataAPI;