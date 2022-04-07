const getFilteredList = (videoList, category) => {
      const newList = videoList.filter((item) => item.category === category);
      return newList.length > 0 ? newList : videoList
}

export {getFilteredList};