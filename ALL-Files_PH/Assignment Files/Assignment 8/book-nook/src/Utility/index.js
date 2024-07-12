const getStoredBooksRead = () => {
  const storedReadBooks = localStorage.getItem("read-book");
  if (storedReadBooks) {
    return JSON.parse(storedReadBooks);
  }
  return [];
};

const saveBooks = (bookId) => {
  const storedReadBooks = getStoredBooksRead();
  const isExists = storedReadBooks.find((bId) => bId === bookId);
  if (!isExists) {
    storedReadBooks.push(bookId);
    localStorage.setItem("read-book", JSON.stringify(storedReadBooks));
  }
};

const getStoredBooksWishlist = () => {
  const storedWishlistBooks = localStorage.getItem("wish-book");
  if (storedWishlistBooks) {
    return JSON.parse(storedWishlistBooks);
  }
  return [];
};

const saveWish = (bookId) => {
  const storedWishlistBooks = getStoredBooksWishlist();
  const isExists = storedWishlistBooks.find((bId) => bId === bookId);
  if (!isExists) {
    storedWishlistBooks.push(bookId);
    localStorage.setItem("wish-book", JSON.stringify(storedWishlistBooks));
  }
};

export { getStoredBooksRead, saveBooks, getStoredBooksWishlist, saveWish };
