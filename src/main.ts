import { Book } from "./book";

// Bookクラスの動作確認用コード
const book1 = new Book("走れメロス", "太宰治");
const book2 = new Book("こころ", "夏目漱石");

// 初期状態を確認
console.log(book1.getStatus());
console.log(book2.getStatus());

// book1 を貸出
book1.borrow();
console.log(book1.getStatus());

// もう一度貸出（変化しないことを確認）
book1.borrow();
console.log(book1.getStatus());

// 返却
book1.returnBook();
console.log(book1.getStatus());
