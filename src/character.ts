export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからも継承先からもアクセス出来ない

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  abstract attack(opponent: Character): void;

  // ダメージを受けて hp を減らす public  メソッド takeDamage(damage: number): void を追加する
  public takeDamage(damage: number): void {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  // hp が 0 以下かを返す isDead(): boolean を追加する
  isDead(): boolean {
    return this.hp <= 0;
  }
}
