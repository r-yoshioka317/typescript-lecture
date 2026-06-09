export class Book {
  private readonly title: string;
  private readonly author: string;
  private isBorrowed: boolean; // 貸し出し中かどうか

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
  }

  public borrow(): void {
    this.isBorrowed = true;
  }

  public returnBook(): void {
    this.isBorrowed = false;
  }

  public getStatus(): string {
    if (this.isBorrowed) {
      return `貸出中: ${this.title} (${this.author})`
    } else {
      return `在庫あり: ${this.title} (${this.author})`
    }
  }
}
